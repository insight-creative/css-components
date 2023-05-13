---
title: Split Hero With Background Image
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
    <div class="hero--split-hero columns">
      <div class="hero__content col">
        <div class="wrapper-sm text-color-white flow">
          <h1 id="hero-heading">Hero Heading</h1>
          <div class="flow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <a class="btn btn--primary" href="/contact/">Contact Us</a>
        </div>
      </div>
      <div class="hero__image col">
        <picture>
          <source sizes="100vw" srcset="" type="image/avif">

          <source sizes="100vw" srcset="" type="image/webp">

          <source sizes="100vw" srcset="" type="image/jpg">

          <img src="https://source.unsplash.com/random/800x800?space" alt="" width="1800" height="600">
        </picture>
      </div>
    </div>
css_example:
  - |
    .hero--split-hero {
      height: 70vh; 
      max-height: 500px;
      overflow: hidden;
    }

    .hero--split-hero .hero__content {
      margin: auto 0;
    }

    .hero--split-hero .hero__image img {
      aspect-ratio: 1/1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
---