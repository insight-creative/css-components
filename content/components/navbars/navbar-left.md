---
title: Hero Centered With Image
component: "heros"
seo:
  page_title: Hero Centered With Image
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
    <header class="header">
      <div class="header__wrapper wrapper-lg">
        <div class="header__logo">
          <span class="visually-hidden">Home</span>
          <a class="brand-logo" href="/">
              <img src="/uploads/Insight-Logo-White.png" width="164" height="141" alt="">
          </a>
        </div>
        <nav class="header__nav flex flex-justify-end" aria-label="primary navigation">
          <ul class="header__nav-list">
              <li class="header__nav-list-item">
                <a class="header__nav-list-link" href="/services/" aria-label="Services">
                    Services
                </a>
              </li>
              <li class="header__nav-list-item">
                <a class="header__nav-list-link" href="/about/" aria-label="About">
                    About
                </a>
              </li>
              <li class="header__nav-list-item">
                <a class="header__nav-list-link" href="/contact/" aria-label="Contact">
                    Contact
                </a>
              </li>
          </ul>
        </nav>
        <div id="header__mobile-nav" class="header__mobile-nav">
          <div class="header__mobile-nav-inner">
            <ul class="header__mobile-nav-menu">
                <li class="header__mobile-nav-item">
                  <a class="header__mobile-nav-link" href="/about/" aria-label="About" title="About">About</a>
                </li>
                <li class="header__mobile-nav-item">
                  <a class="header__mobile-nav-link" href="/contact/" aria-label="Contact" title="Contact">Contact</a>
                </li>
            </ul>
          </div>
        </div>
        <button class="header__hamburger hamburger hamburger--slider" type="button" aria-controls="header__mobile-nav" aria-label="close mobile menu" aria-expanded="true">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </header>
css_example:
  - |
    .hero--centered .hero__image img {
      aspect-ratio: 4/2;
      width: 100%;
      object-fit: cover;
    }
---