---
title: Logo Cloud Simple
component: "logo cloud"
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
    <div class="block logo-cloud--simple">
      <div class="wrapper-lg text-color-white">
        <div class="grid gap-sm">
            <div class="grid-12 grid-2-md margin-block-auto">
                <h2 class="h4 no-margin">Our Clients</h2>
            </div>
            <div class="grid-12 grid-10-md">
                <ul class="logo-grid max-width-none no-padding">
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                </ul>
            </div>
        </div>
      </div>
    </div>
css_example:
  - |
    .logo-cloud--simple .logo-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: $ic-400;

        @include breakpoint(md) {
            grid-template-columns: repeat(3, 1fr);
        }

        @include breakpoint(md) {
            grid-template-columns: repeat(6, 1fr);
        }
    }
---