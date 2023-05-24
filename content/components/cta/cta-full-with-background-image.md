---
title: CTA Full With Background Image
component: "cta"
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
    <section class="cta cta--full-background-image bg-black-2 text-color-white text-align-center" aria-labelledby="cta-heading">
      <div class="cta__content block">
        <div class="wrapper-md flow">
          <h2 id="cta-heading" class="h1">CTA Heading</h2>
          <div class="font-size-md">"Blue bottle DSA bicycle rights plaid put a bird on it umami VHS seitan, truffaut shoreditch cliche neutra chillwave. Venmo seitan gastropub coloring book. Pickled skateboard hammock bodega boys organic iceland cupping letterpress readymade roof party street art tilde plaid poutine typewriter."</div>
          <a class="btn btn--primary" href="/contact/">Let's Talk</a>
        </div>
      </div>
      <div class="cta__overlay"></div>
      <div class="cta__image">
        <picture>
          <source sizes="100vw" srcset="" type="image/avif">

          <source sizes="100vw" srcset="" type="image/webp">

          <source sizes="100vw" srcset="" type="image/jpg">

          <img src="https://source.unsplash.com/random/1600x600?space" alt="" width="1800" height="600">
        </picture>
      </div>
    </section>
css_example:
  - |
    .cta--full-background-image {
      display: grid;
    }

    .cta--full-background-image > * {
      grid-area: 1/-1;
    }

    .cta--full-background-image .cta__content {
      z-index: 3;
    }

    .cta--full-background-image .cta__overlay {
      z-index: 2;
      background-color: rgba(0,0,0,.6);
    }

    .cta--full-background-image .cta__image {
      z-index: 1;
    }
---