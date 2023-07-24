---
title: Split Hero With Three Images
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
    <section class="hero--split-image-grid columns" aria-labelledby="hero-heading">
      <div class="hero__content col">
        <div class="wrapper-sm text-color-white flow">
          <h1 id="hero-heading">Hero Heading</h1>
          <div class="flow">Ugh tilde lyft, praxis raclette cloud bread affogato cliche venmo poutine typewriter yuccie helvetica.</div>
          <a class="btn btn--primary" href="/contact/">Contact Us</a>
        </div>
      </div>
      <div class="hero__image-grid col">
        <img class="hero__image-grid-1" src="https://source.unsplash.com/random/800x800?space" alt="" width="1800" height="600">
        <img class="hero__image-grid-2" src="https://source.unsplash.com/random/800x800?space" alt="" width="1800" height="600">
        <img class="hero__image-grid-3" src="https://source.unsplash.com/random/800x800?space" alt="" width="1800" height="600">
      </div>
    </section>
css_example:
  - |
    .hero--split-image-grid .hero__content {
      margin: auto 0;
    }

    .hero--split-image-grid .hero__image-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 2rem;
    }

    .hero--split-image-grid .hero__image-grid img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
    }

    .hero--split-image-grid .hero__image-grid-1 {
      grid-area: 1 / 1 / 4 / 3;
      height: 80% !important;
      margin-block: auto;
    }

    .hero--split-image-grid .hero__image-grid-2 {
      grid-area: 1 / 3 / 2 / 4;
    }

    .hero--split-image-grid .hero__image-grid-3 {
      grid-area: 2 / 3 / 4 / 4;
    }
---