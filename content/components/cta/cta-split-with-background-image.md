---
title: Split CTA With Background Image
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
    <section class="cta--split columns bg-black-2 shadow-md" aria-labelledby="cta-heading">
      <div class="cta__content block margin-block-auto col">
        <div class="wrapper-sm text-color-white flow">
          <h2 id="cta-heading" class="h1">CTA Heading</h2>
          <p>Kombucha literally sriracha gatekeep succulents kogi. Shoreditch XOXO beard gentrify cardigan green juice bodega boys blackbird spyplane tousled Brooklyn fit. Forage tacos cold-pressed blue bottle. Cornhole offal JOMO PBR&B occupy, fashion axe cloud bread yr.</p>
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
    .cta--split .cta__image img {
        aspect-ratio: 3/2;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
---