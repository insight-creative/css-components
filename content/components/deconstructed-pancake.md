---
title: "Deconstructed pancake"
seo:
  page_title: "Deconstructed pancake"
  meta_description:
  featured_image:
  featured_image_alt:
html: >-
  <div class="parent">
     <div class="box bg-black-2">1</div>
     <div class="box bg-black-2">2</div>
     <div class="box bg-black-2">3</div>
   </div>
date: 2022-09-26
categories:
  - Display
---

HTML

```
<div class="parent">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

CSS

```
.parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.box {
  flex: 1 1 150px; /*  Stretching: */
  flex: 0 1 150px; /*  No stretching: */
  margin: 5px;
}
```
