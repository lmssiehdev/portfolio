<script lang="ts" setup>
import type { IProject } from "../types";
import ProjectCard from "./ProjectCard.vue";

const projectsInfo: IProject[] = [
  {
    title: "REDOIT!",
    url: "https://redoit.app/",
    sourceCode: null,
    description:
      "REDOIT! is a habit tracking app that helps you reach your goals by creating and tracking positive habits.",
    image: "/images/project-ss-01.png",
    icons: ["typescript", "react", "tailwind", "firebase"],
  },
  {
    title: "Calm Whisper",
    url: "https://calmwhisper.com/",
    sourceCode: "https://github.com/lmssiehdev/calmwhisper",
    description:
      "calmwhisper is an ambient noise app featuring a collection of soothing soundscapes, perfect for a relaxing and productive work environment.",
    image: "/images/project-ss-02.png",
    icons: ["typescript", "react", "tailwind"],
  },
  {
    title: "librereads",
    url: "https://librereads.vercel.app/",
    sourceCode: "https://github.com/lmssiehdev/librereads",
    description: "A free & open source Goodreads front-end.",
    image: "/images/project-ss-03.png",
    icons: ["typescript", "react", "tailwind"],
  },
  // {
  //   title: "SUS link lengthener",
  //   url: "https://lmssieh.github.io/SUS-link-lengthener/",
  //   sourceCode: null,
  //   description:
  //     "is a playful project transforms short links into long and SUS URLs composed of Among Us characters.",
  //   image: "/images/project-ss-04.png",
  //   icons: ["javascript"],
  // },
];
</script>

<template>
  <div>
    <div>
      <h3
        class="font-augillion leading-10 py-2 text-orange-400 flex items-center gap-2"
      >
        <span class="text-5xl">featured</span>
      </h3>
    </div>
    <ProjectCard
      v-for="project in projectsInfo"
      :key="project.title"
      :project="project"
    />
    <div class="my-5" v-if="false">
      <a href="/work" class="text-lg underline hover:text-orange-400">
        see all projects ↗︎
      </a>
    </div>
  </div>
</template>
