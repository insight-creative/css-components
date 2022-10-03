---
title: "Equal Height Columns"
seo:
  page_title: "Equal Height Columns"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-10-03
categories:
  - Display
---

HTML

```
<div class="flex">
    <div class="col">
        <h3>Column Heading</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequuntur rerum possimus ab? Iusto id omnis vero atque voluptatibus repudiandae?</p>
    </div>
</div>
```

SCSS

```
.flex {
  display: flex;
}

.col {
  flex: 1;
  margin: 0 10px;
}
```