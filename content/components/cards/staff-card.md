---
title: Staff Card
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
    <article class="card card--staff flex flex-column">
        <div class="card__image-wrap cover-image">
            <img src="https://source.unsplash.com/random/800x600?person" alt="" class="card__img">
        </div>
        <div class="card__content flow">
            <h3 class="h4"><a class="card__link no-decoration" href="#">Archibald Northbottom</a></h3>
            <span class="text-style-slub">Speech impediment specialist</span>
            <div class="card__summary font-size-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
    </article>
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