---
title: "Redoit"
description: "Redoit is an offline-first habit tracker, designed to help users build and maintain positive routines."
pubDate: "Jul 15 2022"
heroImage: "/blog-placeholder-2.jpg"
---

[ DO NOT READ, THIS IS A TEMPLATE ]

Redoit is an offline-first habit tracker, designed to help users build and maintain positive routines.
![](../../assets/images/redoit-project/redoit-ss-01.png)
#### My Role
As the sole developer, I had the chance to work on every aspect of the project, from form planning through development to deployment.

#### Stack

<!-- Choosing React made the most sense, considering the upcoming development of a mobile version using React Native. This approach will enable better code sharing between both versions. I used Replicache to handle offline-first functionality. Next.js serves as the backend framework, and the decision to host the app on Vercel was natural, given its status as the default platform for Next.js projects.
Hosting the app on Vercel was a natural decision, given its status as the default platform for Next.js projects.  -->

Opting for React was a logical choice, particularly with the future development of a mobile version using React Native in mind. This approach will enable better code sharing between the web and mobile versions. I used Replicache to handle offline-first functionality. Serving as the backend framework is Next.js, and the decision to host the application on Vercel was a natural one, given its standing as the default platform for Next.js projects.

![](../../assets/images/redoit-project/redoit-ss-02.png)

### Overcoming Challenges and Thought Process
Overcoming Challenges and Thought Process
I encountered numerous challenges, and one that stood out was the implementation of offline support for the existing backend. This proved to be a particularly intricate problem to solve, considering the multitude of edge cases and the critical need to handle server failures without risking any data loss—especially unacceptable for a habit tracker, where years of tracking data could be at stake.

After exploring various solutions, I chose Replicache, a client-side sync library designed for building real-time and local-first applications. Replicache was selected due to its exceptional reliability and seamless integration capabilities with most backends.

Another challenge involved selecting a technology stack that not only works for the current scenario but will seamlessly integrate with React Native in the future, ensuring a smooth transition to mobile platforms and facilitating efficient code sharing.
<!-- 
As the project scaled, implementing changes became more time-consuming. Recognizing the importance of constant code refactoring, I learned to keep components small and modular. I also extracted certain functionalities into their own npm packages for maintainability. -->


### Lessons Learned

As the project scaled, implementing changes became more time-consuming. Recognizing the importance of constant code refactoring, I learned to keep components small and modular. I also extracted certain functionalities into their own npm packages for maintainability.


