---
title: Header With Secondary Nav
component: "headers"
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
    <header class="header header--with-secondary">
      <div class="header__top bg-gray">
        <div class="wrapper-lg">
          <ul class="header__top-nav">
            <li class="header__top-nav-item">
              <a class="header__top-nav-link href="#">News</a>
            </li>
            <li class="header__top-nav-item">
              <a class="header__top-nav-link" href="#">Tours</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="header__wrapper wrapper-lg">
        <div class="header__logo">
          <span class="visually-hidden">Home</span>
          <a class="brand-logo" href="/">
              <img src="/uploads/Insight-Logo-White.png" width="164" height="141" alt="">
          </a>
        </div>
        <nav class="header__nav" aria-label="primary navigation">
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
    <script>
    const siteHeader = document.querySelector(".header")
    const mobileMenu = document.querySelector('.header__mobile-nav');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', toggleMobileMenu);

    function toggleMobileMenu() {
      if (mobileMenu.classList.contains('nav-open')) {
        this.setAttribute('aria-expanded', 'false');
        this.setAttribute('aria-label', 'open mobile menu');
        mobileMenu.classList.remove('nav-open');
        hamburger.classList.remove('is-active');
      } else {
        mobileMenu.classList.add('nav-open');
        hamburger.classList.add('is-active');
        this.setAttribute('aria-expanded', 'true');
        this.setAttribute('aria-label', 'close mobile menu');
      }
    }
    </script>
css_example:
  - |
    .header {
      width: 100%;
      // position: fixed;
      position: relative;
      top: 0;
      left: 0;
      z-index: 9;
      transition: $transition;
      background-color: $white;
      box-shadow: 0 4px 8px rgba(0,0,0,.15);
      padding: .5rem 0;
    }

    .header__wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include breakpoint(lg) {
        overflow: visible;
      }
    }

    .header__logo {
      max-width: clamp(150px, 20vw, 200px);
    }

    .header__mobile-nav {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      overflow: hidden;
      transition: $transition;
      background-color: $white;
      overflow: hidden;
      max-height: 0;
      transition: max-height .5s ease-in-out;

      @include breakpoint(md) {
        display: none;
      }
    }

    .header__mobile-nav.nav-open {
      max-height: 1000px;
    }

    .header__mobile-nav-item {
      position: relative;
      list-style-type: none;
    }

    .header__mobile-nav-link {
      text-decoration: none;
      padding: $ic-100 0;
      display: block;
      width: 100%;
      transition: color $transition;
      font-family: $secondary-font;
      font-size: $ic-200; 
      border-bottom: 1px solid #f6f6f6;
      color: $black;

      &:hover,
      &:focus {
        color: $secondary-color;
      }
    }


    .header__mobile-nav-menu {
      max-width: 600px;
      margin: 0 auto;
      padding: 1.5rem;
    }

    .header__nav {
      display: none;

      @include breakpoint(md) {
        display: flex; 
      }
    }

    .header__nav-list {
      display: none;

      @include breakpoint(md) {
        display: flex;
        padding: 0;
        margin: 0;
      }
    }

    .header__nav-list-item {
      position: relative;

      @include breakpoint(md) {
        list-style-type: none;
        margin-top: 0;
        padding: 1rem 1.25rem;
        display: inline-block;
      }
    }

    .header__nav-list-link {
      position: relative;
      text-decoration: none;
      font-family: $secondary-font;
      font-size: $ic-200;
      padding: .8rem 0;
      transition: $transition;
      color: $black;

      &::after {
        background: $secondary-color;
        height: 3px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: top right;
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        transition: transform $transition;
      }

      @include breakpoint(md) {
        &:hover,
        &:focus {
          color: $primary-color;

          &::after {
            transform: scaleX(1);
            transform-origin: top left;
          }
        }
      }
    }

    .header__nav-list-item:last-of-type {
      padding-right: 0;
    }

    .nav-open {
      transform: translateX(0);
      opacity: 1;
      overflow: hidden;
      visibility: visible;
    }

    // Start styles for header with secondary navigation
    .header--with-secondary {
      padding: 0;
    }

    .header__top {
      display: none;

      @include breakpoint(md) {
        display: flex;
      }
    }

    .header__top-nav {
      display: flex;
      max-width: fit-content;
      margin-left: auto;
      margin-top: 0;
      margin-bottom: 0;
      padding: .3rem 0;

      li:last-of-type {
        padding: 0 0 0 1rem;
      }
    }

    .header__top-nav-item {
      list-style-type: none;
      margin-top: 0;
      padding: 0 1rem;
    }

    .header__top-nav-link {
      color: $black;
      text-decoration: none;
      font-size: .8rem;
      font-weight: 700;
      transition: color $transition;

      &:hover, 
      &:focus {
        color: $primary-color;
      }
    }

    .header--with-secondary .header__wrapper {
      padding-top: .5rem;
      padding-bottom: .5rem;
    }
    // End styles for header with secondary navigation
---