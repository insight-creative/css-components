---
title: Two Column Hero With Image
component: "cards"
seo:
  page_title: Two Column Hero With Image
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
    <section class="hero block" aria-labelledby="hero-heading">
        <div class="wrapper-lg columns gap-xl">
            <div class="hero__content col flow">
                <div>
                    <h1 class="hero__heading" id="hero-heading">Hero Heading</h1>
                </div>
                <div class="hero__body flow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <a class="btn btn--primary" href="/contact/">Contact Us</a>
            </div>
            <div class="col p-relative">
                <img src="https://source.unsplash.com/random/800x600?space" alt="" width="1200" height="800">
            </div>
        </div>
    </section>
css_example:
  - |
    .card {
        position: relative;
        list-style-type: none;
        max-width: 30ch;
        margin-inline: auto;
        margin-block-start: 0;
        transition: .3s ease-out;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, .15);

        &:hover, 
        &:focus {
            transform: translateY(-10px);

            .card__overlay {
                opacity: 1;
            }

            .card__img {
                transform: scale(1.1);
            }

            .service-card__underline {
                transform: scaleX(1.5);
            }
        }
    }

    .card::after {
        position: absolute;
        bottom: -5px;
        right: 0;
        content: "";
        width: 75%;
        height: 10px;
        background-color: #92981b;
    }

    .card__meta {
        position: absolute;
        top: -18px;
        left: 0;
        z-index: 2;
    }

    .card__image-wrap {
        position: relative;
        width: 100%;
        height: 250px;
    }

    .card__img {
        block-size: 250px;
        inline-size: 100%;
        object-fit: cover;
        transition: .3s ease-out;;
    }

    .card__overlay {
        display: grid;
        place-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(109.95deg, rgba(0, 0, 0, 0.15) 0%, rgba(#cd1f40, 0.5) 100%);
        opacity: 0;
        transition: opacity .3s ease-in-out;
    }

    .card__content {
        padding: 1.25rem;
    }

    .card__link::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
        width: 100%;
        content: "";
    }
---