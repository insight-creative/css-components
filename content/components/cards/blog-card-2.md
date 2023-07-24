---
title: Blog Card 2
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
    <article class="card card--blog flex flex-column">
        <div class="card__meta">
            <a href="/categories/" class="btn btn--secondary btn--category" aria-label="View all example posts">example</a>
        </div>
        <div class="card__image-wrap cover-image">
            <img src="https://source.unsplash.com/random/800x600?space" alt="" class="card__img">
            <div class="card__overlay">
                <div class="btn btn--secondary" aria-label="">Read More</div>
            </div>
        </div>
        <div class="card__content flow">
            <h3 class="h4"><a class="card__link no-decoration" href="#">Blog Title</a></h3>
            <div class="card__summary font-size-xs">Poke aesthetic street art post-ironic intelligentsia meditation, live-edge activated charcoal vexillologist pickled. Ramps Brooklyn truffaut, tattooed you probably haven't heard of them cred keffiyeh.</div>
        </div>
        <div class="card__footer flex flex-justify-between">
            <span class="card__read-more font-size-xs flex flex-center gap-xs">
                Read Article 
                <div class="icon-sm icon-fill-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.2928932,6.70710678 L12.7071068,5.29289322 L19.4142136,12 L12.7071068,18.7071068 L11.2928932,17.2928932 L16.5857864,12 L11.2928932,6.70710678 Z M6.29289322,6.70710678 L7.70710678,5.29289322 L14.4142136,12 L7.70710678,18.7071068 L6.29289322,17.2928932 L11.5857864,12 L6.29289322,6.70710678 Z"/></svg>
                </div>
            </span>
            <span class="card__reading-time font-size-xs flex flex-center gap-xs">
                <div class="icon-sm icon-fill-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22.335" viewBox="0 0 22 22.335"><path d="M13.61,8.658H11.95V15.3L17.2,18.448l.83-1.361L13.61,14.466ZM18.961,1.81l5.1,4.254-1.416,1.7-5.1-4.251Zm-11.808,0,1.418,1.7-5.1,4.252-1.416-1.7Zm5.9,2.423a9.956,9.956,0,1,0,9.956,9.956A9.957,9.957,0,0,0,13.056,4.233Zm0,17.7A7.744,7.744,0,1,1,20.8,14.189,7.752,7.752,0,0,1,13.056,21.933Z" transform="translate(-2.057 -1.81)"/></svg>
                </div>
                2 min read
            </span>
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

    .card--blog {
        padding: 1rem;
    }

    .card--blog .card__content {
        padding: 0;
    }

    .card--blog .card__meta {
        top: 1rem;
        left: 1rem;
    }
---