---
title: Events Hero
component: "cards"
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
    <section class="hero hero--event hero--image block bg-black-2 text-color-white" aria-labelledby="hero-heading">
        <div class="wrapper-lg columns gap-xl">
            <div class="hero__content col flow">
                <div class="back">
                    <a class="flex flex-center" href="/blog/">
                        <div class="icon-md icon-fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                        </div>
                        <span>Back to all posts</span>
                    </a>
                </div>
                <h1 class="hero__heading" id="hero-heading">Your Event Heading</h1>
                <div>
                    <div class="flex flex-center">
                        <div class="icon-sm icon-fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        </div>
                        <span class="ml-1 font-size-xs">Webinar</span>
                    </div>
                    <div class="flex flex-center">
                        <div class="icon-sm icon-fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                        </div>
                        <span class="ml-1 font-size-xs">Tuesday, August 15, 2023</span>
                    </div>
                    <div class="flex flex-center">
                        <div class="icon-sm icon-fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        </div>
                        <span class="ml-1 font-size-xs">7:00 AM – 8:00 PM CST</span>
                    </div>
                </div>
                <a class="btn btn--primary" href="/contact/">Register Now</a>
            </div>
            <div class="hero__image col p-relative">
                <img src="https://source.unsplash.com/random/800x600?space" alt="" width="1200" height="800">
            </div>
        </div>
        <div class="hero__animation ">
            <div class="rings rings--interior"></div>
        </div>
    </section>
css_example:
  - |
    .hero {
        position: relative;
        display: grid;

        > * {
            grid-area: 1/-1;
        }
    }

    .hero .col {
        margin: auto 0;
    }

    .hero--image .hero__image img {
        aspect-ratio: 3/2;
        width: 100%;
        object-fit: cover;
    }

    .hero--event .back {
        transform: translateY(-100px);
    }

    .hero--event .hero__image img {
        position: relative;
        z-index: 2;
    }

    .hero__animation {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .rings {
        position: absolute;
        z-index: 1;
    }

    .rings--interior {
        height: 100vw;
        width: 100vw;
        top: 50%;
        right: 0;
        transform: translateX(25%);

        @include breakpoint(md) {
            height: 400px;
            width: 400px;
            top: 75px;
        }
    }

    .rings::before, 
    .rings::after {
        height: 100%;
        width: 100%;
        border: 2px solid $primary-color;
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        border-radius: 100%;
        animation: 20s linear infinite forwards rotation;
    }

    .rings::before {
        transform-origin: 48% 48%;
    }

    .rings::after {
        transform-origin: 52% 52%;
        animation-delay: 2s;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
---