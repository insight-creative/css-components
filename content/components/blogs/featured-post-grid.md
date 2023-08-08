---
title: Featured Post Grid
component: "cards"
seo:
  page_title: Featured Post Grid
  meta_description:
  featured_image: /uploads/featured-image.jpg
  featured_image_alt:
date: 2022-05-04
hero:
  heading:
  body:
  hero_image:
    image: /uploads/featured-image.jpg
    image_alt:
html_example:
  - |
    <ul class="blog-feed--1 gap-md">
        <li class="card flex flex-column">
            <div class="card__meta">
                <a href="#" class="btn btn--secondary btn--category" aria-label="View all example posts">example</a>
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
        </li>
        <li class="card flex flex-column">
            <div class="card__meta">
                <a href="#" class="btn btn--secondary btn--category" aria-label="View all example posts">example</a>
            </div>
            <div class="card__image-wrap cover-image">
                <img src="https://source.unsplash.com/random/800x600?space" alt="" class="card__img">
                <div class="card__overlay">
                    <div class="btn btn--secondary" aria-label="">Read More</div>
                </div>
            </div>
            <div class="card__content flow">
                <h3 class="h4"><a class="card__link no-decoration" href="#">Blog Title</a></h3>
            </div>
        </li>
        <li class="card flex flex-column">
            <div class="card__meta">
                <a href="#" class="btn btn--secondary btn--category" aria-label="View all example posts">example</a>
            </div>
            <div class="card__image-wrap cover-image">
                <img src="https://source.unsplash.com/random/800x600?space" alt="" class="card__img">
                <div class="card__overlay">
                    <div class="btn btn--secondary" aria-label="">Read More</div>
                </div>
            </div>
            <div class="card__content flow">
                <h3 class="h4"><a class="card__link no-decoration" href="#">Blog Title</a></h3>
            </div>
        </li>
        <li class="card">
            <div class="card__content flow">
                <h3 class="h4"><a class="card__link no-decoration" href="#">Get Started Today!</a></h3>
                <div class="card__summary font-size-xs">Start building your websites faster using these simple prebuilt HTML and CSS components.</div>
                <a class="btn btn--primary" href="#">Get Started</a>
            </div>
        </li>
    </ul>
css_example:
  - |
    .blog-feed--1 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .blog-feed--1, 
    .blog-feed--1 .card {
        max-width: none;
    }

    .blog-feed--1 li:nth-of-type(1) { 
        grid-area: 1 / 1 / 3 / 3;
    }

    .blog-feed--1 li:nth-of-type(2) { 
        grid-area: 1 / 3 / 2 / 4; 
    }

    .blog-feed--1 li:nth-of-type(3) { 
        grid-area: 1 / 4 / 2 / 5; 
    }

    .blog-feed--1 li:nth-of-type(4) { 
        grid-area: 2 / 3 / 3 / 5; 
    }
---