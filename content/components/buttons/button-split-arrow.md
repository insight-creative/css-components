---
title: Split Button With Arrow
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
    <a class="btn btn--split" href="/contact/">Contact Us <div class="btn__icon icon-md icon-stroke-white"><svg xmlns="http://www.w3.org/2000/svg" class="arrow-right" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></div></a>
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

    .btn--split {
      display: flex;
      font-size: .75rem;
      padding: $ic-100 $ic-400;
      border: none;
      color: $primary-color;
      background-color: $body-black;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: calc(100% + 3px);
        background-color: $primary-color;
        height: 100%;
        aspect-ratio: 1/1;
        transition: $transition;
      }

      &:hover,
      &:focus {
        .btn__icon {
          transform: translateX(8px);
        }

        &::after {
          transform: translateX(8px) rotate(45deg);
        }
      }
    }

    .btn__icon {
      position: absolute;
      left: calc(100% + 18px);
      z-index: 1;
      transition: $transition;
    }
---