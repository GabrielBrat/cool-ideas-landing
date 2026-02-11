<?php
/**
 * Main Index Template
 * Redirects to front-page.php for the landing page
 */
get_header();
?>

<main style="padding-top: 100px;">
    <div class="container">
        <?php if ( have_posts() ) : ?>
            <?php while ( have_posts() ) : the_post(); ?>
                <article>
                    <h2><?php the_title(); ?></h2>
                    <div><?php the_content(); ?></div>
                </article>
            <?php endwhile; ?>
        <?php else : ?>
            <p>Nenhum conteúdo encontrado.</p>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
