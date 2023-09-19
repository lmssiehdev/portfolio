---
title: "First post"
description: "Lorem ipsum dolor sit amet"
pubDate: "Jul 08 2022"
heroImage: "/blog-placeholder-3.jpg"
---

Finally got around to learn infer, for real this time, I've know about infer in typescript for a while know, I could understand code using it, but whenever I tried to use it myself I couldn't figure out where it should go

How to use it

<!-- get the last item of an array -->

type A<T extends []> = T extends [...unkown, Last] ? Last : T;

type A = { one : 1 } & { two: 2 } extends infer D extends {
[Key in keyof D]: D[Key]
};
