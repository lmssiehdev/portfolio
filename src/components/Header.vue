<script setup lang="ts">
import DancingChicken from "./DancingChicken.vue";
</script>

<template>
  <div>
    <header class="flex flex-col md:flex-row gap-x-10">
      <div class="items-end children:mx-auto">
        <DancingChicken />
      </div>
      <div class="flex-1 flex flex-col justify-center">
        <h2 class="text-3xl">
          <div class="text-5xl mb-4 font-augillion">
            Hi! I'm <span class="text-orange-400 mr-2">lmssieh</span> 👋
          </div>
        </h2>
        <p class="text-xl font-raleway">
          <!-- a
          <span
            class="font-bold underline text-orange-400 cursor-pointer transition-all ease duration-300 hover:bg-orange-400 hover:text-white"
          >
            Front End developer</span
          >
          based in Morocco, with a passion for developing
          <span
            class="font-bold underline text-orange-400 cursor-pointer transition-all ease duration-300 hover:bg-orange-400 hover:text-white"
          >
            JavaScript applications
          </span> and creating things that can improve people's daily lives. I'm a -->
          creative developer/designer who loves to craft intuitive and visually
          appealing solutions that captivate users.
        </p>
      </div>
    </header>
  </div>
</template>
