---
title: Two Column Hero With Image
component: "cards"
seo:
  page_title: Two Column Hero With Image
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
    <section class="hero hero--image block" aria-labelledby="hero-heading">
        <div class="wrapper-lg columns gap-xl">
            <div class="hero__content col flow">
                <h1 class="hero__heading" id="hero-heading">Hero Heading</h1>
                <div class="hero__body flow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <a class="btn btn--primary" href="/contact/">Contact Us</a>
            </div>
            <div class="hero__image col p-relative">
                <img src="https://source.unsplash.com/random/800x600?space" alt="" width="1200" height="800">
            </div>
        </div>
    </section>
css_example:
  - |
    .hero {
        position: relative;
        background: $white;
        display: grid;

        > * {
            grid-area: 1/-1;
        }
    }

    .hero .col {
        margin: auto 0;
    }

    .hero--image .hero__image img {
        aspect-ratio: 3/2;
        width: 100%;
        object-fit: cover;
    }
---