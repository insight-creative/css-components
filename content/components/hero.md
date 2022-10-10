---
title: "Hero"
seo:
  page_title: "Hero"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-10-10
html: >-
  <div class="hero" style="height: 100px;border: 1px solid #f6f6f6;">
    <div class="hero__content wrapper-lg">
      <div class="lines w-100">
        <div class="line line-20"></div>
        <div class="line line-80"></div>
        <div class="line line-80"></div>
        <div class="line line-80"></div>
      </div>
      <div class="btn-placeholder"></div>
    </div>  
  </div>
categories:
  - Display
---

HTML

```
<div class="hero">
  <div class="hero__content wrapper-lg">
    <h1 class="text-white">Hero heading</h1>
    <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#" class="btn btn-primary">Contact Us</a>
  </div>  
</div>
```

SCSS

```
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */

  &__content {
    text-align: center;
  }
}
```

CSS

```
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
}

.hero__content {
  text-align: center;
}
```
