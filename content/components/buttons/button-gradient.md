---
title: Button With Gradient & Icon
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
html_example:
  - |
    <a class="btn btn--gradient" href="/contact/">Contact Us <svg xmlns="http://www.w3.org/2000/svg" class="arrow-right" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
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

    .btn--gradient {
      background-size: 300% 100%;
      background-image: linear-gradient(
        to right,
        $primary-color 0%,
        $secondary-color 15%,
        $secondary-color 85%,
        $primary-color 100%
      );
      color: $white;

      svg {
        position: relative;
        top: 3px;
        width: 20px;
        height: 20px;
        margin-left: 1rem;
        fill: transparent;
        stroke: #fff;
        transition: .3s ease-in-out;
      }

      &:hover,
      &:focus {
        background-position: 100% 0;
        transition: all 0.4s ease-in-out;
        color: $white;

        svg {
          transform: translate(5px);
        }
      }
    }
---