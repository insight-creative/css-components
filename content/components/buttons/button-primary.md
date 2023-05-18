---
title: Button Primary
component: "buttons"
date: 2022-05-01
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
    <a class="btn btn--primary" href="/contact/">Contact Us</a>
css_example:
  - |
    .btn {
      position: relative;
      z-index: 1;
      display: inline-block;
      font-family: $secondary-font;
      font-size: .9rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      padding: $ic--100 $ic-400;
      text-decoration: none;
      transition: $transition;
      width: fit-content;

      &:hover,
      &:focus {
        transition: $transition;
      }
    }

    .btn--primary {
      color: $white;
      background-color: $primary-color;
      transition: $transition;

      &:hover,
      &:focus {
        color: $white;
        background-color: $dark-black;
      }
    }
---