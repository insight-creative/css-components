---
title: "RAM (Repeat, Auto, Minmax)"
seo:
  page_title: "RAM (Repeat, Auto, Minmax)"
  meta_description:
  featured_image:
  featured_image_alt:
html: >-
  <div class="ram-container">
     <div class="box bg-black-2">1</div>
     <div class="box bg-black-2">2</div>
     <div class="box bg-black-2">3</div>
   </div>
date: 2022-09-26
categories:
  - Layout
---

HTML

```
<div class="ram-container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

CSS

```
.ram-container {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /*  No stretching: */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /*  Stretching: */
}
```

Demo

<div class="demo-container bg-black">
  <div class="ram-container">
    <div class="box bg-black-2">1</div>
    <div class="box bg-black-2">2</div>
    <div class="box bg-black-2">3</div>
  </div>
  <div class="demo-container__resize">Resize me!</div>
</div>
