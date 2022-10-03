---
title: "Full Screen Modal"
seo:
  page_title: "Full Screen Modal"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-10-03
categories:
  - Display
---

HTML

```
<div class="modal">
    <!-- The close button -->
    <button type="button" class="modal__close" aria-label="Close modal"></button>
    
    <!-- The navigation menu -->
    <div class="modal__content">
        ...
    </div>
</div>
```

SCSS

```
.modal {
  /* Full screen overlay */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  &__close {
    /* Place close button at top left corner */
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}
```

CSS

```
.modal {
  /* Full screen overlay */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.modal__close {
  /* Place close button at top left corner */
  position: absolute;
  top: 1rem;
  right: 1rem;
}
```