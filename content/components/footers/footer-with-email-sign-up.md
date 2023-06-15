---
title: Footer With Email Sign Up
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
    <footer class="footer footer--three-column">
      <div class="footer__columns wrapper-lg">
        <div class="block-sm grid gap-lg">
          <div class="grid-12 grid-4-md">
            <a class="footer__logo" href="/">
              <img src="/uploads/Insight-Logo-White.png" width="164" height="141" alt="">
            </a>
            <address class="mt-2">
              <p class="flex flex-center">
                <span class="icon-sm icon-fill-primary">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                </span>
                <a href="#" target="_blank" rel="noreferrer" class="ml-1 font-size-xs">1816 Sal St. Green Bay, WI 54302</a>
              </p>
              <p class="flex flex-center">
                <span class="icon-sm icon-fill-primary">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                </span>
                <a href="tel:920-468-7459" class="ml-1 font-size-xs">920-468-7459</a>
              </p>
            </address>
          </div>
          <div class="grid-12 grid-4-md">
            <div class="grid gap-sm">
              <div class="grid-6">
                <h2 class="h5">Links</h2>
                <nav aria-label="Footer Navigation">
                  <ul class="footer__nav">
                    <li class="footer__nav-item">
                      <a class="footer__nav-link font-size-xs" href="/services/" aria-label="Services">
                        Services
                      </a>
                    </li>
                    <li class="footer__nav-item">
                      <a class="footer__nav-link font-size-xs" href="/about/" aria-label="About">
                        About
                      </a>
                    </li>
                    <li class="footer__nav-item">
                      <a class="footer__nav-link font-size-xs" href="/blog/" aria-label="Blog">
                        Blog
                      </a>
                    </li>
                    <li class="footer__nav-item">
                      <a class="footer__nav-link font-size-xs" href="/contact/" aria-label="Contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="grid-6">
                <h2 class="h5">Links</h2>
                <nav aria-label="Footer Navigation">
                  <ul class="footer__nav">
                    <li class="footer__nav-item">
                      <a class="footer__nav-link font-size-xs" href="/services/" aria-label="Services">
                        Services
                      </a>
                    </li>
                    <li class="footer__nav-item">
                      <a class="footer__nav-link font-size-xs" href="/about/" aria-label="About">
                        About
                      </a>
                    </li>
                    <li class="footer__nav-item">
                      <a class="footer__nav-link font-size-xs" href="/blog/" aria-label="Blog">
                        Blog
                      </a>
                    </li>
                    <li class="footer__nav-item">
                      <a class="footer__nav-link font-size-xs" href="/contact/" aria-label="Contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="grid-12 grid-4-md flow">
            <h2 class="h5">Connect With Us</h2>
            <form action="/contact/thank-you/" class="contact-form" method="post" name="Newsletter Subscribe">
              <div class="visually-hidden">
                  <label for="_subject">New email newsletter subscriber</label>
                  <input aria-label="subject" id="_subject" name="_subject" value="New email newsletter subscriber"/>
              </div>
              <div class="contact-form__form-group">
                  <h2 class="h6">Subscribe to get industry updates</h2>
                  <label for="email" class="font-size-xs">Email*</label>
                  <div class="flex">
                    <input id="email" name="_replyto" type="email" class="contact-form__form-control" required>
                    <button type="submit" class="contact-form__btn btn btn--primary btn--newsletter">Subscribe</button>
                  </div>
              </div>
              <input type="hidden" name="inbox_key" value="inbox-key">
              <input type="text" name="_gotcha" class="visually-hidden" aria-label="gotcha">
              <div class="h-captcha" data-sitekey="1fed954e-6da0-41fa-8f8e-3833e98ac619"></div>
            </form>
            <div class="footer__social">
              <ul class="footer__social-list flex flex-center">
                <li class="footer__social-item">
                  <a class="footer__social-icon icon-lg icon-fill-primary dim" href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12C24 5.37097 18.629 0 12 0C5.37097 0 0 5.37097 0 12C0 17.9894 4.38823 22.9539 10.125 23.8548V15.4689H7.07661V12H10.125V9.35613C10.125 6.34887 11.9153 4.68774 14.6574 4.68774C15.9706 4.68774 17.3439 4.92194 17.3439 4.92194V7.87355H15.8303C14.34 7.87355 13.875 8.79871 13.875 9.74758V12H17.2031L16.6708 15.4689H13.875V23.8548C19.6118 22.9539 24 17.9894 24 12Z"></path>
                    </svg>
                    <span class="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li class="footer__social-item">
                  <a class="footer__social-icon icon-lg icon-fill-primary dim" href="https://www.instagram.com/matthews_tire/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="footer__social-item">
                  <a class="footer__social-icon icon-lg icon-fill-primary dim" href="https://www.youtube.com/user/MatthewsTireAndAuto" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                    <span class="visually-hidden">YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-lg">
        <div class="footer__bottom border-top-gray">
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

    .footer__logo {
      display: block;
      max-width: 200px;
      margin-inline: auto;
    }

    .footer__nav-item {
      list-style-type: none;
      margin-top: 0;
      padding: $ic-100; 
    }

    .footer__social-list {
      margin: 0;
      padding: 0;
    }

    .footer__social-item {
      list-style-type: none;
      margin: 0;
      padding-inline-end: $ic-200;
    }

    .footer__copyright {
      font-size: $ic--100;
      padding: $ic-100 0;

      @include breakpoint(md)  {
        .footer__credits {
          margin-left: auto;
        }
      }
    }

    .footer__nav,
    .footer__copyright-nav {
      margin: 0;
      padding: 0;
    }

    .footer__copyright-item {
      list-style-type: none;
      margin: $ic-100;

      @include breakpoint(md)  {
        margin: 0 0 0 $ic--100;
      }
    }
---