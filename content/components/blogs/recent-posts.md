---
title: Recent Posts Feed
component: "cards"
seo:
  page_title: Recent Posts Feed
  meta_description:
  featured_image: /uploads/featured-image.jpg
  featured_image_alt:
date: 2022-05-03
hero:
  heading:
  body:
  hero_image:
    image: /uploads/featured-image.jpg
    image_alt:
html_example:
  - |
    <h2 class="text-color-white">Recent Posts</h2>
    <ul class="blog-feed--2 grid-columns-3 max-width-none no-padding gap-md">
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
                <div class="card__summary font-size-xs">Thundercats heirloom praxis, venmo tonx godard pork belly. Narwhal JOMO sustainable, big mood heirloom man braid tbh quinoa normcore XOXO chartreuse neutra wolf tonx.</div>
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
                <div class="card__summary font-size-xs">Hexagon hoodie, waistcoat artisan copper mug authentic coloring book tattooed 8-bit drinking vinegar. Flannel freegan before they sold out flexitarian blackbird Brooklyn celiac.</div>
            </div>
        </li>
    </ul>
    <div class="text-align-center">
        <a class="btn btn--primary" href="#">View All Posts</a>
    </div>
css_example:
  - |
    .blog-feed--2, 
    .blog-feed--2 .card {
        max-width: none;
    }
---