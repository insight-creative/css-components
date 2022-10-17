---
title: "Blockquote"
seo:
  page_title: "Blockquote"
  meta_description:
  featured_image:
  featured_image_alt:
html: >-
  <blockquote class="blockquote-preview">
    <div class="lines">
      <div class="line line-80"></div>
      <div class="line line-80"></div>
      <div class="line line-80"></div>
      <div class="line line-80"></div>
      <div class="line line-20"></div>
    </div>
    <cite>―Source</cite>
  </blockquote>
date: 2022-10-17
categories:
  - Layout
---

HTML

```
<blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Adipiscing vitae proin sagittis nisl rhoncus.
  </p>
  <cite>―Blockquote Source</cite>
</blockquote>
```

SCSS

```
blockquote {
  padding: 0 2rem;
  border-left: 5px solid #cd1f40;

  p {
    padding-bottom: 1.25rem;
  }

  cite {
    font-style: italic;
  }
}
```

CSS

```
blockquote {
  padding: 0 2rem;
  border-left: 5px solid #cd1f40;
}

blockquote  p {
  padding-bottom: 1.25rem;
}

blockquote cite {
  font-style: italic;
}
```

Demo

<blockquote class="flow">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Adipiscing vitae proin sagittis nisl rhoncus.
  </p>
  <cite>―Blockquote Source</cite>
</blockquote>
