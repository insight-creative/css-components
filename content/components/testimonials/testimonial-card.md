---
title: Testimonial Cards
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
    <section class="testimonial testimonial--cards block text-color-white" aria-labelledby="testimonial-heading">
      <div class="wrapper-lg text-align-center">
        <span class="text-style-slub">Testimonials</span>
        <h2 class="testimonial__heading" id="testimonial-heading">What Our Clients Are Saying</h2>
      </div>
      <div class="wrapper-lg columns gap-sm">
        <div class="testimonial__card col flow bg-black-2">
          <h3 class="h4" id="testimonial-heading">Testimonial Heading</h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Eget dolor morbi non arcu risus quis varius."</p>
          <div class="flex gap-sm">
            <div class="testimonial__card-image">
              <img src="https://source.unsplash.com/random/100x100?face" alt="" width="50" height="50">
            </div>
            <div class="margin-block-auto">
              <span>Max Conversion</span><br>
              <span class="text-style-slub">SEO Expert</span>
            </div>
          </div>
        </div>
        <div class="testimonial__card col flow bg-black-2">
          <h3 class="h4" id="testimonial-heading">Testimonial Heading</h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Eget dolor morbi non arcu risus quis varius."</p>
          <div class="flex gap-sm">
            <div class="testimonial__card-image">
              <img src="https://source.unsplash.com/random/100x100?face" alt="" width="50" height="50">
            </div>
            <div class="margin-block-auto">
              <span>Max Conversion</span><br>
              <span class="text-style-slub">SEO Expert</span>
            </div>
          </div>
        </div>
        <div class="testimonial__card col flow bg-black-2">
          <h3 class="h4" id="testimonial-heading">Testimonial Heading</h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Eget dolor morbi non arcu risus quis varius."</p>
          <div class="flex gap-sm">
            <div class="testimonial__card-image">
              <img src="https://source.unsplash.com/random/100x100?face" alt="" width="50" height="50">
            </div>
            <div class="margin-block-auto">
              <span>Max Conversion</span><br>
              <span class="text-style-slub">SEO Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
css_example:
  - |
    .testimonial__card {
        padding: $ic-300;
        border-radius: 10px;
        box-shadow: 0px 8px 16px rgba(0,0,0,.1);
    }

    .testimonial__card-image img {
        width: 75px;
        height: 75px;
        object-fit: cover;
        border: 5px solid $dark-black;
        border-radius: 50%;
    }
---