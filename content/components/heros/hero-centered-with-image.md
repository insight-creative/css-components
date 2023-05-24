---
title: Hero Centered With Image
component: "heros"
seo:
  page_title: Hero Centered With Image
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
    <section class="hero--centered block" aria-labelledby="hero-heading">
        <div class="wrapper-sm text-align-center text-color-white flow gap-xl">
            <h1 id="hero-heading">Hero Heading</h1>
            <div class="flow">Readymade quinoa ennui art party squid ascot beard umami before they sold out forage irony lumbersexual pop-up trust fund chillwave.</div>
            <a class="btn btn--primary" href="/contact/">Contact Us</a>
        </div>
        <div class="hero__image wrapper-md mt-4 p-relative">
            <img src="https://source.unsplash.com/random/1600x400?space" alt="" width="1200" height="800">
        </div>
    </section>
css_example:
  - |
    .hero--centered .hero__image img {
      aspect-ratio: 4/2;
      width: 100%;
      object-fit: cover;
    }
---