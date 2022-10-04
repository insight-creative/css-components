---
title: "Equal Height Columns"
seo:
  page_title: "Equal Height Columns"
  meta_description:
  featured_image:
  featured_image_alt:
html: >-
  <div class="flex">
    <div class="col">
      <img src="https://source.unsplash.com/random/800x600" alt="">
      <div class="col__content">
          <div class="lines">
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-20"></div>
          </div>
      </div>
      <div class="btn-placeholder"></div>
    </div>
    <div class="col">
      <img src="https://source.unsplash.com/random/800x600" alt="">
      <div class="col__content">
          <div class="lines">
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-20"></div>
          </div>
      </div>
      <div class="btn-placeholder"></div>
    </div>
    <div class="col">
      <img src="https://source.unsplash.com/random/800x600" alt="">
      <div class="col__content">
          <div class="lines">
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-80"></div>
            <div class="line line-20"></div>
          </div>
      </div>
      <div class="btn-placeholder"></div>
    </div>
  </div>
date: 2022-10-03
categories:
  - Display
---

HTML

```
<div class="flex">
  <div class="col">
    <img src="https://source.unsplash.com/random/800x600" alt="">
    <div class="col__content">
        <h3>Column Heading</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequuntur rerum possimus ab? Iusto id omnis vero atque voluptatibus repudiandae?</p>
    </div>
  </div>
</div>
```

SCSS

```
.flex {
  display: flex;
}

.col {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  border: 1px solid $light-gray;
  padding: .25rem;

  &__content {
      flex: 1;
  }
}
```

CSS

```
.flex {
  display: flex;
}

.col {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  border: 1px solid $light-gray;
  padding: .25rem;
}

.col__content {
  flex: 1;
}
```
