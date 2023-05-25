---
title: Footer Centered
component: "footers"
date: 2022-05-03
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
    <footer class="footer footer--centered">
      <div class="footer__top wrapper-lg">
        <a class="footer__logo w-100" href="/">
          <img src="/uploads/Insight-Logo-White.png" width="164" height="141" alt="">
        </a>
        <nav aria-label="Footer Navigation">
          <ul class="footer__nav flex flex-justify-center max-width-none">
            <li class="footer__nav-item">
              <a class="footer__nav-link fw-700" href="/services/" aria-label="Services">
                Services
              </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link fw-700" href="/about/" aria-label="About">
                About
              </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link fw-700" href="/blog/" aria-label="Blog">
                Blog
              </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link fw-700" href="/contact/" aria-label="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div class="footer__social>
          <ul class="social flex flex-center">
            <li class="social__list-item">
              <a class="social__icon icon-sm dim" href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12C24 5.37097 18.629 0 12 0C5.37097 0 0 5.37097 0 12C0 17.9894 4.38823 22.9539 10.125 23.8548V15.4689H7.07661V12H10.125V9.35613C10.125 6.34887 11.9153 4.68774 14.6574 4.68774C15.9706 4.68774 17.3439 4.92194 17.3439 4.92194V7.87355H15.8303C14.34 7.87355 13.875 8.79871 13.875 9.74758V12H17.2031L16.6708 15.4689H13.875V23.8548C19.6118 22.9539 24 17.9894 24 12Z"></path>
                </svg>
                <span class="visually-hidden">Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper-lg">
        <div class="footer__bottom">
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