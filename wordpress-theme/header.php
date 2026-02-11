<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Cool Ideas - Agência de Marketing Digital em Itajaí/SC. Transformamos ideias em resultados para sua marca.">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- HEADER -->
<header class="site-header" id="site-header">
    <div class="container">
        <div class="header-inner">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo">
                COOL<span>ideas</span>
            </a>

            <nav class="main-nav">
                <a href="#servicos">Serviços</a>
                <a href="#resultados">Resultados</a>
                <a href="#depoimentos">Depoimentos</a>
                <a href="#contato">Contato</a>
            </nav>

            <div class="header-cta">
                <a href="#contato" class="btn btn-teal">Fale Conosco</a>
            </div>

            <button class="mobile-menu-toggle" id="mobile-toggle" aria-label="Abrir menu">
                ☰
            </button>
        </div>
    </div>

    <div class="mobile-menu" id="mobile-menu">
        <a href="#servicos">Serviços</a>
        <a href="#resultados">Resultados</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#contato">Contato</a>
        <a href="#contato" class="btn btn-teal">Fale Conosco</a>
    </div>
</header>
