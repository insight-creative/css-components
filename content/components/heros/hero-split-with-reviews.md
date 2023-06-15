---
title: Split Hero With Reviews
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
          <a class="btn btn--primary" href="/services/">View Services</a>
          <a class="btn btn--secondary" href="/contact/">Contact Us</a>
          <div>
            <div class="stars-wrapper flex">
              <div class="icon-md icon-fill-primary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 14.3916L15.1501 17.5L13.7834 11.6416L18.3334 7.69996L12.3417 7.19163L10.0001 1.66663L7.65841 7.19163L1.66675 7.69996L6.21675 11.6416L4.85008 17.5L10.0001 14.3916Z"></path>
                </svg>
              </div>
              <div class="icon-md icon-fill-primary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 14.3916L15.1501 17.5L13.7834 11.6416L18.3334 7.69996L12.3417 7.19163L10.0001 1.66663L7.65841 7.19163L1.66675 7.69996L6.21675 11.6416L4.85008 17.5L10.0001 14.3916Z"></path>
                </svg>
              </div>
              <div class="icon-md icon-fill-primary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 14.3916L15.1501 17.5L13.7834 11.6416L18.3334 7.69996L12.3417 7.19163L10.0001 1.66663L7.65841 7.19163L1.66675 7.69996L6.21675 11.6416L4.85008 17.5L10.0001 14.3916Z"></path>
                </svg>
              </div>
              <div class="icon-md icon-fill-primary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 14.3916L15.1501 17.5L13.7834 11.6416L18.3334 7.69996L12.3417 7.19163L10.0001 1.66663L7.65841 7.19163L1.66675 7.69996L6.21675 11.6416L4.85008 17.5L10.0001 14.3916Z"></path>
                </svg>
              </div>
              <div class="icon-md icon-fill-primary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 14.3916L15.1501 17.5L13.7834 11.6416L18.3334 7.69996L12.3417 7.19163L10.0001 1.66663L7.65841 7.19163L1.66675 7.69996L6.21675 11.6416L4.85008 17.5L10.0001 14.3916Z"></path>
                </svg>
              </div>
            </div>
            <div class="font-size-xs"><strong>4.8 / 5</strong> - from 12k reviews</div>
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