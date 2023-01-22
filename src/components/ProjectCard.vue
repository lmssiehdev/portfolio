<script setup lang="ts">
import type { IProject } from '../types';

const props = defineProps<{
	project: IProject
}>()

</script>
<template>
	<div class="flex flex-col m-auto sm:w-auto sm:m-0 sm:flex-row sm:py-2 font-freight">
		<div
			class="overflow-hidden hover:drop-shadow-[7px_7px_0_#34d399] transition-all min-w-0 sm:min-w-[450px] h-[280px]">
			<img :src="project.image" :alt="project.image"
				class="block w-full h-full border-2 border-black cursor-pointer object-top hover:object-bottom object-cover transition-all duration-800" />
		</div>

		<div class="my-4 md:ml-2 md:px-3 flex flex-col">
			<div class="flex items-center">
				<a :href="project.url" target="_blank" rel="noreferrer"
					class="flex items-center text-2xl underline hover:text-orange-400">
					{{ project.title }}
				</a>
			</div>
			<p class="mt-3 ">{{ project.description }}</p>

			<div class="mt-3 md:mt-auto">
				<div v-if="project.sourceCode" class="flex items-center py-1">
					<a :href="project.sourceCode" target="_blank" rel="noreferrer" class="underline hover:text-orange-400">
						Source Code ↗︎
					</a>
				</div>
				<div class="flex items-center py-1">
					<p class="mr-2">Built with:</p>
					<div>
						<ul class="flex items-center gap-2 text-sm children:(h-6 w-6)">
							<li v-for="icon in project.icons">{{ icon }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
