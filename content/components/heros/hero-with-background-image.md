---
title: Hero With Background Image
component: "heros"
seo:
  page_title:
  meta_description:
  featured_image: /uploads/featured-image.jpg
  featured_image_alt:
hero:
  heading:
  body:
  hero_image:
    image: /uploads/featured-image.jpg
    image_alt:
html_example:
  - |
    <section class="hero hero--background-image" aria-labelledby="hero-heading">
      <div class="hero__image">
        <picture>
          <source sizes="100vw" srcset="" type="image/avif">

          <source sizes="100vw" srcset="" type="image/webp">

          <source sizes="100vw" srcset="" type="image/jpg">

          <img src="https://source.unsplash.com/random/1800x600?space" alt="" width="1800" height="600">
        </picture>
      </div>
      <div class="hero__content">
        <div class="wrapper-sm text-color-white text-align-center flow">
          <h1 id="hero-heading">Hero Heading</h1>
          <div class="flow">Echo park wayfarers art party wolf. Put a bird on it Brooklyn wayfarers everyday carry succulents, fixie palo santo. Solarpunk kogi godard fit, wayfarers cold-pressed ascot artisan waistcoat.</div>
          <a class="btn btn--primary" href="/contact/">Contact Us</a>
        </div>
      </div>
    </section>
css_example:
  - |
    .hero--background-image {
      max-height: 500px;
      height: 50vh;
      overflow: hidden;
    }

    .hero--background-image::after {
      content: "";
      background-color: rgba($black,.7);
      grid-area: 1/-1;
    }

    .hero--background-image .hero__content {
      z-index: 1;
      margin: auto;
    }

    .hero--background-image .hero__image {
      position: relative;
    }

    .hero--background-image .hero__image img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
---