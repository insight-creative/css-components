---
title: Meet Our Experts
component: "cards"
seo:
  page_title: 
  meta_description:
  featured_image: /uploads/featured-image.jpg
  featured_image_alt:
date: 2022-05-02
hero:
  heading:
  body:
  hero_image:
    image: /uploads/featured-image.jpg
    image_alt:
html_example:
  - |
    <div class="block">
        <div class="wrapper-lg grid gap-sm">
            <div class="experts-list grid-12 grid-8-md shadow-lg bg-black-2 text-color-white flow">
                <h2 class="h3">Meet Our Experts</h2>
                <p>Our team of industry experts strive to create the most accurate, most clear, and most useful information on the internet.</p>
                <a class="btn btn--primary" href="#">Meet Our Experts</a>
                <ul class="staff-grid grid-columns-2 gap-sm no-padding">
                    <li class="staff-card flex gap-sm bg-black">
                        <div class="staff-card__image">
                            <img src="https://source.unsplash.com/random/100x100?face" alt="" width="50" height="50">
                        </div>
                        <div class="margin-block-auto">
                            <span>Max Conversion</span><br>
                            <span class="text-style-slub">SEO Expert</span>
                        </div>
                    </li>
                    <li class="staff-card flex gap-sm bg-black">
                        <div class="staff-card__image">
                            <img src="https://source.unsplash.com/random/100x100?face" alt="" width="50" height="50">
                        </div>
                        <div class="margin-block-auto">
                            <span>Max Conversion</span><br>
                            <span class="text-style-slub">SEO Expert</span>
                        </div>
                    </li>
                    <li class="staff-card flex gap-sm bg-black">
                        <div class="staff-card__image">
                            <img src="https://source.unsplash.com/random/100x100?face" alt="" width="50" height="50">
                        </div>
                        <div class="margin-block-auto">
                            <span>Max Conversion</span><br>
                            <span class="text-style-slub">SEO Expert</span>
                        </div>
                    </li>
                    <li class="staff-card flex gap-sm bg-black">
                        <div class="staff-card__image">
                            <img src="https://source.unsplash.com/random/100x100?face" alt="" width="50" height="50">
                        </div>
                        <div class="margin-block-auto">
                            <span>Max Conversion</span><br>
                            <span class="text-style-slub">SEO Expert</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="blog-stardards grid-12 grid-4-md shadow-lg bg-black-2 text-color-white flow">
                <h2 class="h3">Our Standards</h2>
                <div>
                    <h3 class="h4">Integrity</h3>
                    <p>We produce responsible content that is honest, objective, and comprehensive.</p>
                </div>
                <div>
                    <h3 class="h4">Reliability</h3>
                    <p>We ensure content is credible and fact-checked by qualified personnel.</p>
                </div>
                <div>
                    <h3 class="h4">Empathy</h3>
                    <p>We break down complex issues to best support you with your health decisions.</p>
                </div>
                <a class="btn btn--primary" href="#">More About Our Standards</a>
            </div>
        </div>
    </div>
css_example:
  - |
    .experts-list,
    .blog-stardards {
        padding: 1.25rem;
    }

    .staff-grid {
        margin-top: 3rem;
    }

    .staff-card {
        margin-top: 0;
        padding: 1rem;
    }

    .staff-card__image img {
        width: 75px;
        height: 75px;
        object-fit: cover;
        border: 5px solid $body-black;
        border-radius: 50%;
    }
---