<?php
/**
 * Cool Ideas Landing Page - Theme Functions
 *
 * @package CoolIdeas
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/* ----------------------------------------
   1. THEME SETUP
   ---------------------------------------- */
function coolideas_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'gallery', 'caption' ) );
    add_theme_support( 'custom-logo', array(
        'height'      => 80,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    register_nav_menus( array(
        'primary' => __( 'Menu Principal', 'coolideas' ),
    ) );
}
add_action( 'after_setup_theme', 'coolideas_setup' );

/* ----------------------------------------
   2. ENQUEUE STYLES & SCRIPTS
   ---------------------------------------- */
function coolideas_enqueue() {
    // Google Fonts
    wp_enqueue_style(
        'coolideas-google-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );

    // Theme Stylesheet
    wp_enqueue_style(
        'coolideas-style',
        get_stylesheet_uri(),
        array( 'coolideas-google-fonts' ),
        wp_get_theme()->get( 'Version' )
    );

    // Theme JavaScript
    wp_enqueue_script(
        'coolideas-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'coolideas_enqueue' );

/* ----------------------------------------
   3. CUSTOMIZER SETTINGS
   ---------------------------------------- */
function coolideas_customize_register( $wp_customize ) {

    // WhatsApp Section
    $wp_customize->add_section( 'coolideas_whatsapp', array(
        'title'    => __( 'WhatsApp', 'coolideas' ),
        'priority' => 30,
    ) );

    $wp_customize->add_setting( 'whatsapp_number', array(
        'default'           => '5547999999999',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'whatsapp_number', array(
        'label'   => __( 'Número do WhatsApp (com DDI)', 'coolideas' ),
        'section' => 'coolideas_whatsapp',
        'type'    => 'text',
    ) );

    // Contact Info Section
    $wp_customize->add_section( 'coolideas_contact', array(
        'title'    => __( 'Informações de Contato', 'coolideas' ),
        'priority' => 31,
    ) );

    $wp_customize->add_setting( 'contact_phone', array(
        'default'           => '(47) 99999-9999',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'contact_phone', array(
        'label'   => __( 'Telefone', 'coolideas' ),
        'section' => 'coolideas_contact',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'contact_email', array(
        'default'           => 'contato@coolideas.com.br',
        'sanitize_callback' => 'sanitize_email',
    ) );
    $wp_customize->add_control( 'contact_email', array(
        'label'   => __( 'E-mail', 'coolideas' ),
        'section' => 'coolideas_contact',
        'type'    => 'email',
    ) );

    $wp_customize->add_setting( 'contact_address', array(
        'default'           => 'Itajaí, Santa Catarina',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'contact_address', array(
        'label'   => __( 'Endereço', 'coolideas' ),
        'section' => 'coolideas_contact',
        'type'    => 'text',
    ) );

    // Social Links Section
    $wp_customize->add_section( 'coolideas_social', array(
        'title'    => __( 'Redes Sociais', 'coolideas' ),
        'priority' => 32,
    ) );

    $socials = array( 'instagram', 'linkedin', 'facebook' );
    foreach ( $socials as $social ) {
        $wp_customize->add_setting( "social_{$social}", array(
            'default'           => '#',
            'sanitize_callback' => 'esc_url_raw',
        ) );
        $wp_customize->add_control( "social_{$social}", array(
            'label'   => ucfirst( $social ) . ' URL',
            'section' => 'coolideas_social',
            'type'    => 'url',
        ) );
    }
}
add_action( 'customize_register', 'coolideas_customize_register' );

/* ----------------------------------------
   4. CONTACT FORM HANDLER (AJAX)
   ---------------------------------------- */
function coolideas_handle_contact() {
    check_ajax_referer( 'coolideas_contact_nonce', 'nonce' );

    $name    = sanitize_text_field( $_POST['name'] ?? '' );
    $email   = sanitize_email( $_POST['email'] ?? '' );
    $phone   = sanitize_text_field( $_POST['phone'] ?? '' );
    $company = sanitize_text_field( $_POST['company'] ?? '' );
    $message = sanitize_textarea_field( $_POST['message'] ?? '' );

    if ( empty( $name ) || empty( $email ) || empty( $message ) ) {
        wp_send_json_error( 'Campos obrigatórios não preenchidos.' );
    }

    $to      = get_theme_mod( 'contact_email', get_option( 'admin_email' ) );
    $subject = "[Cool Ideas] Novo contato de {$name}";
    $body    = "Nome: {$name}\nE-mail: {$email}\nTelefone: {$phone}\nEmpresa: {$company}\n\nMensagem:\n{$message}";
    $headers = array( 'Content-Type: text/plain; charset=UTF-8', "Reply-To: {$email}" );

    $sent = wp_mail( $to, $subject, $body, $headers );

    if ( $sent ) {
        wp_send_json_success( 'Mensagem enviada com sucesso!' );
    } else {
        wp_send_json_error( 'Erro ao enviar. Tente novamente.' );
    }
}
add_action( 'wp_ajax_coolideas_contact', 'coolideas_handle_contact' );
add_action( 'wp_ajax_nopriv_coolideas_contact', 'coolideas_handle_contact' );

function coolideas_localize_script() {
    wp_localize_script( 'coolideas-script', 'coolideas_ajax', array(
        'url'   => admin_url( 'admin-ajax.php' ),
        'nonce' => wp_create_nonce( 'coolideas_contact_nonce' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'coolideas_localize_script' );
