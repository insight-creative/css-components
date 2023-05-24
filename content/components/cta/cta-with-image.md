---
title: CTA With Image
component: "cta"
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
    <section class="cta--with-image block columns" aria-labelledby="cta-heading">
      <div class="cta__content margin-block-auto col">
        <div class="wrapper-sm text-color-white flow">
          <h2 id="cta-heading" class="h1">CTA Heading</h2>
          <p>Palo santo mustache tilde vegan. Mukbang same adaptogen tbh mustache literally umami cupping offal subway tile mustache flannel bodega boys mustache quinoa pug.</p>
          <a class="btn btn--primary" href="/contact/">Let's Talk</a>
        </div>
      </div>
      <div class="cta__image col">
        <picture>
          <source sizes="100vw" srcset="" type="image/avif">

          <source sizes="100vw" srcset="" type="image/webp">

          <source sizes="100vw" srcset="" type="image/jpg">

          <img src="https://source.unsplash.com/random/800x800?space" alt="" width="1800" height="600">
        </picture>
      </div>
    </section>
css_example:
  - |
    .cta--with-image .cta__image img {
        aspect-ratio: 1/1;
        width: 100%;
        max-width: 500px;
        object-fit: cover;
        border-radius: 50%;
        margin: auto;
    }
---