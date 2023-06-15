---
title: Testimonial Full
component: "testimonials"
seo:
  page_title:
  meta_description:
  featured_image: /uploads/featured-image.jpg
  featured_image_alt:
html_example:
  - |
    <div class="block bg-primary text-color-white">
      <div class="testimonial testimonial--full wrapper-md flow">
        <div class="testimonial__icon icon-xxl icon-fill-white">
          <svg width="45" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.65 40.15C0.65 37.75 0.65 35.35 0.65 32.95C0.65 30.45 0.65 28 0.65 25.6C0.65 17.9 1.75 11.85 3.95 7.44999C6.15 3.05 10 0.749995 15.5 0.549992L18.35 6.4C15.25 6.69999 13.1 8.19999 11.9 10.9C10.8 13.5 10.25 17.65 10.25 23.35H18.2V40.15H0.65ZM27.05 40.15C27.05 37.75 27.05 35.35 27.05 32.95C27.05 30.45 27.05 28 27.05 25.6C27.05 17.9 28.15 11.85 30.35 7.44999C32.55 3.05 36.4 0.749995 41.9 0.549992L44.75 6.4C41.65 6.69999 39.5 8.19999 38.3 10.9C37.2 13.5 36.65 17.65 36.65 23.35H44.6V40.15H27.05Z"></path>
          </svg>
        </div>
        <div class="font-size-md text-align-center">"Mumblecore fashion axe flannel, meh mustache tumblr hexagon palo santo bitters. Food truck plaid heirloom chicharrones +1, cupping raclette tumeric kogi lomo beard. Man braid pickled selvage, butcher blue bottle paleo sus authentic DSA synth raw denim neutra vaporware heirloom mustache."</div>
        <div class="text-align-center">
          <div class="testimonial__image">
            <img src="https://source.unsplash.com/random/100x100?face" alt="" width="50" height="50">
          </div>
          <div class="fw-600">Max Conversion</div>
          <div class="text-style-slub">SEO Expert</div>
        </div>
      </div>
    </div>
css_example:
  - |
    .testimonial--full .testimonial__icon {
        margin: 0 auto;
    }

    .testimonial--full .testimonial__image img {
        width: 75px;
        height: 75px;
        object-fit: cover;
        border: 5px solid $white;
        border-radius: 50%;
        margin: 0 auto;
    }
---