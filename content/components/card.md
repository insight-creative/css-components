---
title: "Card"
seo:
  page_title: "Card"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-09-26
categories:
  - Display
---

HTML

```
<div class="card">
  <!-- A card with featured image -->
  <div class="card__image">
      ...
  </div>
  <!-- A card with given width -->
  <div class="card__body">
      ...
  </div>
  ...
</div>
```

SCSS

```
.card {
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
  border-radius: 0.5rem;

  &__image {
    max-height: 300px;
    overflow: hidden;

    img {
      object-fit: cover;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  }

  &__body {
    padding: 1.25rem;
    font-size: 1rem;
  }
}
```

CSS 

```
.card {
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
  border-radius: 0.5rem;
}

.card__image {
  max-height: 300px;
  overflow: hidden;
}

.card__image img {
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.card__body {
  padding: 1.25rem;
  font-size: 1rem;
}
```