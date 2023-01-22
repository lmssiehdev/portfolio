<script lang="ts" setup>
import ProjectCard from "./ProjectCard.vue";

const projectsInfo: project[] = [
		{
			title: "REDOIT!",
			url: "https://redoit.app/",
			sourceCode: null,
			description:
				"REDOIT! is a habit tracker web app that helps you build good habits and reach your goals.",
			image: "/images/project-ss-01.png",
			icons: ["vue", "tailwind", "firebase"],
		},
		{
			title: "MoodRooster",
			url: "https://github.com/lmssieh/moodrooster",
			sourceCode: "https://github.com/lmssieh/moodrooster",
			description: "Mood tracker & journaling web app.",
			image: "/images/project-ss-02.png",
			icons: ["typescript", "react", "windicss", "firebase"],
		},
		{
			title: "Custom Surviv Skins",
			url: "https://greasyfork.org/en/scripts/394362",
			sourceCode: "https://github.com/lmssieh/survivMods",
			description:
				"a free and purely cosmetic script that lets you use custom skins during games, it even lets you make your own skins!",
			image: "/images/project-ss-03.png",
			icons: ["javascript"],
		},
	];

</script>

<template>
  <div>
			<div>
				<h3 class="font-augillion leading-10 py-2 text-orange-400 flex items-center gap-2">
					<span class="text-3xl">✨</span>
					<span class="text-5xl">featured</span>
				</h3>
				<p>what i've been up to semi-recently</p>
			</div>
				<ProjectCard v-for="project in projectsInfo" key={project.title} :project=project />
				<div class="my-5">
						<a href="/work" class="text-lg underline hover:text-orange-400">
							see all projects ↗︎
						</a>
				</div>
	</div>
</template>
