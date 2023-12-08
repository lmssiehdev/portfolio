---
title: "Context Consumer"
description: "Lorem ipsum dolor sit amet"
pubDate: "Jul 15 2022"
heroImage: "/blog-placeholder-2.jpg"
---

While working on a [library ↗︎](https://www.npmjs.com/package/vue-context-hook) that offers a useContext-like API for Vue, I stumbled upon Context.Consumer, which was the standard way of consuming contexts before the introduction of the useContext hook.

```jsx
// Before
// 🟡 Legacy way (not recommended)
function Count() {
  return (
    <CountContext.Consumer>
      {(count) => <div>{count}</div>}
    </CountContext.Consumer>
  );
}

// After
function Count() {
  const { count } = useContext();
  return <div>{count}</div>;
}
```

It's important to note that Context.Consumer is considered legacy, and as a result, I won't be providing support for it.
