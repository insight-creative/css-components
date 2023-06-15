---
title: Simple Link With Arrow
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
    <a class="btn btn--arrow flex flex-center mt-2" href="#">Learn More About Feature <span class="icon-sm icon-stroke-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span></a>
css_example:
  - |
    .btn--arrow {
      display: flex;
      align-items: center;
      padding: 0;

      &:hover, 
      &:focus {
        .icon-sm {
          transform: translate(8px);
        }
      }
    }

    .btn--arrow .icon-sm {
      position: relative;
      top: -1px;
      margin-left: .5rem;
      transition: .3s ease-in-out;
    }
---