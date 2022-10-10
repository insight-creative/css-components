---
title: "Logo grid"
seo:
  page_title: "Logo grid"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-10-10
html: >-
  <ul class="logo-grid" style="grid-template-columns: repeat(2,1fr);padding: 0;">
    <li class="logo-grid__item">
      <div class="logo-grid__link" style="padding: .5rem;height: 50px;">
        <div class="lines w-100">
          <div class="line line-80"></div>
          <div class="line line-80"></div>
          <div class="line line-80"></div>
          <div class="line line-20"></div>
        </div>
      </div>
    </li>
    <li class="logo-grid__item">
      <div class="logo-grid__link" style="padding: .5rem;height: 50px;">
        <div class="lines w-100">
          <div class="line line-80"></div>
          <div class="line line-80"></div>
          <div class="line line-80"></div>
          <div class="line line-20"></div>
        </div>
      </div>
    </li>
    <li class="logo-grid__item">
      <div class="logo-grid__link" style="padding: .5rem;height: 50px;">
        <div class="lines w-100">
          <div class="line line-80"></div>
          <div class="line line-80"></div>
          <div class="line line-80"></div>
          <div class="line line-20"></div>
        </div>
      </div>
    </li>
    <li class="logo-grid__item">
      <div class="logo-grid__link" style="padding: .5rem;height: 50px;">
        <div class="lines w-100">
          <div class="line line-80"></div>
          <div class="line line-80"></div>
          <div class="line line-80"></div>
          <div class="line line-20"></div>
        </div>
      </div>
    </li>
  </ul>
categories:
  - Display
---

HTML

```
<ul class="logo-grid">
  <li class="logo-grid__item">
    <a href="#" target="_blank" rel="noreferrer noopener" class="logo-grid__link">
        <img src="/uploads/logo.jpg" alt="client logo" width="250" height="100"> 
    </a>
  </li>
</ul>
```

SCSS

```
.logo-grid {
  display: grid;

  &__item {
    margin: 0;
    list-style-type: none;
  }

  &__link {
    border-right: 1px solid #f6f6f6;
    border-bottom: 1px solid #f6f6f6;
    display: grid;
    place-items: center;
    height: 150px;
  }
   
  @include breakpoint(sm) {
    grid-template-columns: repeat(2,1fr);

    .logo-grid__item:nth-child(even) .logo-grid__link {
      border-right: none;
    }
  }

  @include breakpoint(md) {
    grid-template-columns: repeat(4,1fr);

    .logo-grid__item:nth-child(4n) .logo-grid__link {
      border-right: none;
    }
  }
}
```

CSS

```
.logo-grid {
  display: grid;
}

.logo-grid__item {
  margin: 0;
  list-style-type: none;
}

.logo-grid__link {
  border-right: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
  display: grid;
  place-items: center;
  height: 150px;
}

@media (min-width: 37.5em) {
  .logo-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .logo-grid__item:nth-child(even) .logo-grid__link {
    border-right: none;
  }
}

@media (min-width: 62em) {
  .logo-grid {
    grid-template-columns: repeat(4,1fr);
  }

  .logo-grid__item:nth-child(4n) .logo-grid__link {
    border-right: none;
  }
}
```
