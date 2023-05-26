---
title: Footer Simple
component: "footers"
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
    <footer class="footer">
      <div class="footer__bottom wrapper-lg">
        <div class="footer__copyright flex flex-column flex-row-md flex-center">
          <p>© 2023 Insight Creative, Inc.</p>
          <ul class="footer__copyright-nav flex flex-justify-center">
            <li class="footer__copyright-item"><a href="/privacy-policy/">Privacy Policy</a></li>
            <li class="footer__copyright-item"><a href="/sitemap/">Sitemap</a></li>
            <li class="footer__copyright-item"><a href="/contact/">Contact</a></li>
          </ul>
          <div class="footer__credits"><a href="https://insightcreative.com" target="_blank">Website by Insight Creative, Inc.</a></div>
        </div>
      </div>
    </footer>
css_example:
  - |
    .footer {
      background-color: $dark-black;
      color: $white;
    }

    .footer a {
      color: $white;
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    .copyright {
      font-size: $ic--100;
      padding: $ic-100 0;

      @include breakpoint(md)  {
        .credits {
          margin-left: auto;
        }
      }
    }

    .copyright__nav {
      margin: 0;
      padding: 0;
    }

    .copyright__list-item {
      list-style-type: none;
      margin: $ic-100;

      @include breakpoint(md)  {
        margin: 0 0 0 $ic--100;
      }
    }
---