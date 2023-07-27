---
title: Blockquote 1
component: "blockquote"
date: 2022-05-01
seo:
  page_title:
  meta_description:
  featured_image: /uploads/featured-image.jpg
  featured_image_alt:
hero:
  heading:
  body:
html_example:
  - |
    <blockquote>
      <p>“Chicharrones raw denim edison bulb chartreuse banjo vice Brooklyn chambray. Keytar portland fixie put a bird on it. Jawn scenester glossier photo booth kitsch gorpcore shoreditch, lo-fi tousled +1 XOXO. Gastropub locavore bruh organic.”</p>
      <cite>– organic heirloom</cite>
    </blockquote>
css_example:
  - |
    blockquote {
      background-color: $light-gray;
      border-left: 6px solid $primary-color;
      padding: $ic-300;
      margin: 0;
    }

    blockquote p + p {
      margin-block-start: $ic-200;
    }

    blockquote cite {
      display: block;
      font-size: 1rem;
      font-weight: 700;
      font-style: normal;
      text-transform: uppercase;
      letter-spacing: 2px;
      opacity: .8;
      margin-block-start: $ic-200;
    }
---