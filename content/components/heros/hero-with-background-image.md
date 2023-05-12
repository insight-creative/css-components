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
    <div class="hero hero--background-image">
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
          <div class="flow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <a class="btn btn--primary" href="/contact/">Contact Us</a>
        </div>
      </div>
    </div>
css_example:
  - |
---