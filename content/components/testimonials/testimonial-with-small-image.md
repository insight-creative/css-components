---
title: Testimonial With Small Image
component: "testimonials"
seo:
  page_title:
  meta_description:
  featured_image: /uploads/featured-image.jpg
  featured_image_alt:
html_example:
  - |
    <section class="testimonial--small-image wrapper-lg grid gap-lg" aria-labelledby="testimonial-heading">
      <div class="grid-12 grid-3-md">
        <picture>
          <source sizes="100vw" srcset="" type="image/avif">

          <source sizes="100vw" srcset="" type="image/webp">

          <source sizes="100vw" srcset="" type="image/jpg">

          <img src="https://source.unsplash.com/random/400x300?space" alt="" width="1800" height="600">
        </picture>
      </div>
      <div class="grid-12 grid-9-md text-color-white">
        <div class="flow">
          <img src="//localhost:1313/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="testimonial--small-image__logo dim" width="200" height="100">
          <p>"Butcher next level readymade narwhal. Whatever pork belly mustache pork belly meditation bicycle rights readymade, tumblr microdosing mustache kickstarter."</p>
          <div>
            <span class="text-color-primary">Max Conversion</span><br>
            <span class="text-style-slub">SEO Expert</span>
          </div>
        </div>
      </div>
    </section>
css_example:
  - |
    .hero--split-hero {
      position: relative;
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

    .hero--split-hero svg {
      position: absolute;
      top: 0;
      fill: $primary-color;
    }
---