---
title: Logo Cloud With Border Dividers
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
    <div class="block">
      <div class="wrapper-lg text-align-center text-color-white">
        <h2>Partners With Trusted Brands</h2>
        <p class="margin-inline-auto">Heirloom tbh shabby chic godard aesthetic, beard hell of succulents gatekeep photo booth vice shoreditch pitchfork waistcoat. Ramps shabby chic cupping hashtag sus. Grailed swag thundercats praxis typewriter organic quinoa shabby chic sriracha.</p>
        <ul class="logo-grid logo-grid--bordered-dividers max-width-none no-padding mt-6">
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
css_example:
  - |
    .logo-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @include breakpoint(md) {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .brand-card {
        display: grid;
        place-items: center;
        height: 150px;
    }

    .brand-card img {
        width: 100%;
        max-width: 150px;
        height: auto;
        max-height: 75px;

        @include breakpoint(md) { 
            max-width: 225px;
            max-height: 100px;
        }
    }

    .logo-grid--bordered-dividers .brand-card {
        border-right: 1px solid $light-gray;
        border-bottom: 1px solid $light-gray;
    }

    @media (max-width: 62em) {
        .logo-grid--bordered-dividers li:nth-child(even) .brand-card {
            border-right: none;
        }
    }
    // adjust numbers here depending on the number of logos
    .logo-grid--bordered-dividers li:nth-child(n+7):nth-child(-n+8) .brand-card {
        border-bottom: none;
    }

    @include breakpoint(md) {
        .logo-grid--bordered-dividers li:nth-child(4n) .brand-card {
            border-right: none;
        }
        
        // adjust numbers here depending on the number of logos
        .logo-grid--bordered-dividers li:nth-child(n+5):nth-child(-n+8) .brand-card {
            border-bottom: none;
        }
    }
---