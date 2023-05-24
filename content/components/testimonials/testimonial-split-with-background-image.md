---
title: Split Testimonial With Background Image
component: "testimonials"
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
    <section class="hero--split-hero columns" aria-labelledby="testimonial-heading">
      <div class="hero__image col">
        <picture>
          <source sizes="100vw" srcset="" type="image/avif">

          <source sizes="100vw" srcset="" type="image/webp">

          <source sizes="100vw" srcset="" type="image/jpg">

          <img src="https://source.unsplash.com/random/800x800?space" alt="" width="1800" height="600">
        </picture>
      </div>
      <div class="hero__content col">
        <div class="wrapper-sm text-color-white flow">
          <svg width="45" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.65 40.15C0.65 37.75 0.65 35.35 0.65 32.95C0.65 30.45 0.65 28 0.65 25.6C0.65 17.9 1.75 11.85 3.95 7.44999C6.15 3.05 10 0.749995 15.5 0.549992L18.35 6.4C15.25 6.69999 13.1 8.19999 11.9 10.9C10.8 13.5 10.25 17.65 10.25 23.35H18.2V40.15H0.65ZM27.05 40.15C27.05 37.75 27.05 35.35 27.05 32.95C27.05 30.45 27.05 28 27.05 25.6C27.05 17.9 28.15 11.85 30.35 7.44999C32.55 3.05 36.4 0.749995 41.9 0.549992L44.75 6.4C41.65 6.69999 39.5 8.19999 38.3 10.9C37.2 13.5 36.65 17.65 36.65 23.35H44.6V40.15H27.05Z"></path>
          </svg>
          <h1 id="testimonial-heading">Testimonial Heading</h1>
          <div class="flow">
            <p>"Butcher next level readymade narwhal. Whatever pork belly bicycle rights readymade, tumblr microdosing kickstarter.</p>
            <p>Kitsch whatever portland pork belly meditation tumeric helvetica af tattooed mumblecore next level cold-pressed put a bird on it pinterest."</p>
            <div>
              <span class="text-color-primary">Max Conversion</span><br>
              <span class="text-style-slub">SEO Expert</span>
            </div>
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