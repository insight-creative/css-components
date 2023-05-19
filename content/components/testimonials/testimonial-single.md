---
title: Testimonial Single
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
    <section class="testimonial testimonial--single block text-color-white" aria-labelledby="testimonial-heading">
      <div class="wrapper-lg">
        <span class="text-style-slub">Testimonials</span>
        <h2 class="testimonial__heading" id="testimonial-heading">What Our Clients Are Saying</h2>
      </div>
      <div class="wrapper-lg bg-primary columns gap-xl">
          <div class="testimonial__content margin-block-auto col block flow">
              <h3 class="h4" id="testimonial-heading">Testimonial Heading</h3>
              <div class="flow">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Eget dolor morbi non arcu risus quis varius."</p>
                <div>
                  <span>Max Conversion</span><br>
                  <span class="text-style-slub">SEO Expert</span>
                </div>
              </div>
          </div>
          <div class="testimonial__image col p-relative">
              <img src="https://source.unsplash.com/random/400x600?space" alt="" width="600" height="600">
          </div>
      </div>
    </section>
css_example:
  - |
    .testimonial--single .testimonial__heading {
        max-width: 16ch;
    }

    .testimonial--single .testimonial__image img {
        max-width: 400px;
        margin-block: -75px;
        margin-inline: auto;
    }
---