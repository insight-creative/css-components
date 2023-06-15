---
title: Split Hero With Logos
component: "heros"
seo:
  page_title:
  meta_description:
  featured_image: /uploads/featured-image.jpg
  featured_image_alt:
html_example:
  - |
    <section class="hero--split-hero columns" aria-labelledby="hero-heading">
      <div class="hero__content col">
        <div class="wrapper-sm text-color-white flow">
          <h1 id="hero-heading">Hero Heading</h1>
          <div class="flow">Ugh tilde lyft, praxis raclette cloud bread affogato cliche venmo poutine typewriter yuccie helvetica.</div>
          <a class="btn btn--primary" href="/contact/">Contact Us</a>
          <div class="text-style-slub">Trusted By:</div>
          <div class="auto-grid gap-sm hero--split-hero__logos">
            <img src="//localhost:1313/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
            <img src="//localhost:1313/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
            <img src="//localhost:1313/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
          </div>
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
    </section>
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

    .hero--split-hero .hero__image {
      position: relative;
    }

    .hero--split-hero .hero__image img {
      position: absolute;
      aspect-ratio: 1/1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero--split-hero__logos img {
      filter: grayscale(1) brightness(0.7);
    }
---