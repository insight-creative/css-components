---
title: Blog Card 5
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
    <article class="card card--blog-5 flex flex-column flow">
        <div class="card__image-wrap cover-image">
            <img src="https://source.unsplash.com/random/800x600?space" alt="" class="card__img">
            <div class="card__overlay">
                <div class="btn btn--secondary" aria-label="">Read More</div>
            </div>
        </div>
        <div class="card__meta">
            <a href="/categories/" class="btn btn--secondary btn--category" aria-label="View all example posts">example</a>
        </div>
        <div class="card__content flow">
            <h3 class="h4"><a class="card__link no-decoration" href="#">Blog Title</a></h3>
            <div class="card__summary font-size-xs">Poke aesthetic street art post-ironic, charcoal pickled. Brooklyn truffaut, tattooed you probably haven't heard of them.</div>
        </div>
        <div class="flex gap-sm">
            <div class="card__staff-image">
                <img src="https://source.unsplash.com/random/100x100?face" alt="" width="50" height="50">
            </div>
            <div class="margin-block-auto">
                <span class="font-size-xs">Written By Max Conversion</span><br>
            </div>
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
        transition: $transition;
        background-color: $white;
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
        background-color: $secondary-color;
    }

    .card__meta {
        position: absolute;
        top: -18px;
        left: 0;
        z-index: 8;
    }

    .card__image-wrap {
        position: relative;
        width: 100%;
        aspect-ratio: 3/2;
    }

        .card__img {
        inline-size: 100%;
        object-fit: cover;
        transition: $transition;
    }

    .card__overlay {
        display: grid;
        place-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(109.95deg, rgba(0, 0, 0, 0.15) 0%, rgba($primary-color, 0.5) 100%);
        opacity: 0;
        transition: opacity .3s ease-in-out;
    }

    .card__content {
        padding: $ic-200;
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

    .card--blog-5 {
        padding: 1rem;
    }

    .card--blog-5 {
        border-radius: 16px;
    }

    .card--blog-5 .card__image-wrap,
    .card--blog-5 .btn {
        border-radius: 8px;
    }

    .card--blog-5 .card__content {
        padding: 0;
    }

    .card--blog-5 .card__meta {
        position: relative;
        top: 0;
        left: 0;
    }

    .card--blog-5 .card__meta .btn {
        padding: .5rem 1rem;
        font-size: .6rem;
    }

    .card--blog-5::after {
        display: none;
    }

    .card__staff-image img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border: 5px solid $body-black;
        border-radius: 50%;
    }
---