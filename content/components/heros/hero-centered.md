---
title: Hero Centered
component: "heros"
seo:
  page_title: Hero Centered
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
    <section class="hero block" aria-labelledby="hero-heading">
        <div class="hero__content wrapper-sm text-align-center flow">
            <h1 class="hero__heading" id="hero-heading">Hero Heading</h1>
            <div class="hero__body flow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <a class="btn btn--primary" href="/contact/">Contact Us</a>
        </div>
        <div class="hero__image p-relative">
            <img src="https://source.unsplash.com/random/800x600?space" alt="" width="1200" height="800">
        </div>
    </section>
css_example:
  - |
    .hero {
        position: relative;
        background: #fff;
        display: grid;

        > * {
            grid-area: 1/-1;
        }
    }

    .hero .col {
        margin: auto 0;
    }

    .hero__image img {
        aspect-ratio: 3/2;
        width: 100%;
        object-fit: cover;
    }
---