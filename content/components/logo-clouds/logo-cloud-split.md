---
title: Logo Cloud Split
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
    <div class="block logo-cloud logo-cloud--split">
        <div class="wrapper-lg grid gap-lg">
            <div class="logo-cloud__body grid-12 grid-6-md bg-primary text-color-white flow">
                <h2>Partners With Trusted Brands</h2>
                <p class="margin-inline-auto">Heirloom tbh shabby chic godard aesthetic, beard hell of succulents gatekeep photo booth vice shoreditch pitchfork waistcoat. Ramps shabby chic cupping hashtag sus. Grailed swag thundercats praxis typewriter organic quinoa shabby chic sriracha.</p>
            </div>
            <div class="grid-12 grid-6-md margin-block-auto">
                <ul class="logo-grid max-width-none no-padding">
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener" class="brand-card">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener" class="brand-card">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener" class="brand-card">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener" class="brand-card">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener" class="brand-card">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>        
                    <li class="list-style-none no-margin">
                        <a href="#" target="_blank" rel="noreferrer noopener" class="brand-card">
                            <img src="/uploads/Insight-Logo-White.png" alt="Insight Creative, Inc. logo" class="img-responsive dim" width="200" height="100">
                        </a>
                    </li>              
                </ul>
            </div>
        </div>
    </div>
css_example:
  - |
    .logo-cloud__body {
        padding: $ic-600;
    }

    .logo-cloud--split .logo-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: $ic-200;

        @include breakpoint(md) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .logo-cloud--split .brand-card {
        display: grid;
        place-items: center;
        height: 100px;
    }
---