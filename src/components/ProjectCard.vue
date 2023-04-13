<script setup lang="ts">
import type { VueElement } from "vue";
import type { IProject } from "../types";
import FirebaseIcon from "./icons/FirebaseIcon.vue";
import JavascriptIcon from "./icons/JavascriptIcon.vue";
import ReactIcon from "./icons/ReactIcon.vue";
import TailwindIcon from "./icons/TailwindIcon.vue";
import TypescriptIcon from "./icons/TypescriptIcon.vue";
import VueIcon from "./icons/VueIcon.vue";

const props = defineProps<{
  project: IProject;
}>();

const icons: {
  [key: string]: any;
} = {
  firebase: FirebaseIcon,
  tailwind: TailwindIcon,
  react: ReactIcon,
  vue: VueIcon,
  javascript: JavascriptIcon,
  typescript: TypescriptIcon,
};
</script>
<template>
  <div
    class="flex flex-col m-auto sm:w-auto sm:m-0 md:flex-row sm:py-2 py-4 font-raleway"
  >
    <div
      class="overflow-hidden hover:drop-shadow-[7px_7px_0_#34d399] transition-all min-w-0 sm:min-w-[450px] h-[280px]"
    >
      <img
        :src="project.image"
        :alt="project.image"
        class="block w-full h-full border-2 border-black cursor-pointer object-top hover:object-bottom object-cover transition-all duration-1000"
      />
    </div>

    <div class="my-4 md:ml-2 md:px-3 flex flex-col">
      <div class="flex items-center">
        <a
          :href="project.url"
          target="_blank"
          rel="noreferrer"
          class="font-augillion flex items-center text-2xl underline hover:text-orange-400"
        >
          {{ project.title }}
        </a>
      </div>
      <p class="mt-3">{{ project.description }}</p>

      <div class="mt-3 md:mt-auto">
        <div v-if="project.sourceCode" class="flex items-center py-1 pb-2">
          <a
            :href="project.sourceCode"
            target="_blank"
            rel="noreferrer"
            class="underline hover:text-orange-400"
          >
            Source Code ↗︎
          </a>
        </div>
        <div class="py-1">
          <p class="pb-1">Built with:</p>
          <div>
            <ul class="flex items-center gap-4 text-sm children:(h-6 w-6)">
              <li
                class="flex flex-col items-center"
                v-for="icon in project.icons"
              >
                <span class="flex items-center gap-2 rounded text-sm">
                  <Component :is="icons[icon]" class="h-4 w-4" />
                  {{ icon }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
