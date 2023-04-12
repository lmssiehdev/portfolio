<script setup lang="ts">
import CodepenIcon from "./icons/CodepenIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import TwitterIcon from "./icons/TwitterIcon.vue";
</script>

<template>
  <footer class="text-lg font-raleway">
    <div>
      <h4
        class="py-2 text-green-400 text-[50px] font-size-[50px] leading-10 font-augillion"
      >
        get in touch!
      </h4>
      <p>
        email me at <span class="font-freight font-bold">hi@lmssieh.com</span>
      </p>
    </div>
    <div class="pt-4">
      or find me at:
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1">
          <GithubIcon class="h-6 w-6" />

          <a
            class="underline hover:text-orange-500"
            href="https://github.com/lmssiehdev"
            >github</a
          >
        </div>
        <!-- <div class="flex items-center gap-1">
          <TwitterIcon class="h-6 w-6" />
          <a
            class="underline hover:text-orange-500"
            href="https://twitter.com/lmssiehdev"
            >twitter</a
          >
        </div> -->
        <div class="flex items-center gap-1">
          <CodepenIcon class="h-6 w-6" />
          <a
            class="underline hover:text-orange-500"
            href="https://codepen.com/lmssieh"
            >codepen</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
