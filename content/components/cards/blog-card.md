---
title: Blog Card
component: "cards"
seo:
  page_title: Blog Card
  meta_description:
  featured_image: /uploads/featured-image.jpg
  featured_image_alt:
hero:
  heading:
  body:
  hero_image:
    image: /uploads/featured-image.jpg
    image_alt:
htmlExamples:
  - |
    <article class="card flex flex-column col">
        <div class="card__meta">
            <a href="#" class="btn btn--secondary btn--category" aria-label="View all example posts">example</a>
        </div>
        <div class="card__image-wrap cover-image">
            <img src="https://source.unsplash.com/random/800x600?space" alt="" class="card__img dim">
            <div class="card__overlay">
                <div class="btn btn--secondary" aria-label="">Read More</div>
            </div>
        </div>
        <div class="card__content bg-white flow">
            <div>
                <h3 class="h4"><a class="card__link no-decoration" href="#">Blog Title</a></h3>
            </div>
            <div class="card__summary font-size-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum.</div>
        </div>
    </article>
cssExamples:
  - |
    /* CSS code for the cards component - Variation 1 */
    .card {
    list-style-type: none;
    max-width: none;
    margin-block-start: 0;
    transition: $transition;
    background-color: $white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .15);

    .overlay--yellow-gradient {
        opacity: 0;
        transition: opacity .3s ease-in-out;
    }

    &:hover, 
    &:focus {
        transform: translateY(-10px);

        .overlay--yellow-gradient {
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
    background-color: $secondary-color;
    }

    .card__meta {
    position: absolute;
    top: -18px;
    left: 0;
    z-index: 8;
    }

    .card__image-wrap {
    width: 100%;
    height: 250px;
    }

    .card__img {
    block-size: 250px;
    inline-size: 100%;
    object-fit: cover;
    transition: $transition;
    }

    .card__link::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
    height: 100%;
    width: 100%;
    content: "";
    }

    .card__content {
    padding: $ic-200;
    }
---