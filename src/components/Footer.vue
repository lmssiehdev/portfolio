<script setup lang="ts">
const today = new Date();
</script>

<template>
	<footer class="text-lg font-mono">
		<div>
			<h4
				class="py-2 text-green-400 text-[50px] font-size-[50px] leading-10 font-augillion"
			>
				get in touch!
			</h4>
			<p>email me at dummy[at]email.me</p>
		</div>
		<div class="pt-4">
			or find me at:
			<div class="flex items-center gap-4">
				<div class="flex items-centert">
					<a
						class="underline ml-1 hover:text-orange-500"
						href="https://github.com/lmssieh"
						>github</a
					>
	    </div>
				<div class="flex items-center">
					<a
						class="underline ml-1 hover:text-orange-500"
						href="https://twitter.com/lmssiehdev"
						>twitter</a
					>
				</div>
				<div class="flex items-center">
					<a
						class="underline ml-1 hover:text-orange-500"
						href="https://codepen.com/lmssieh"
						>codepen</a
					>
				</div>
			</div>
		</div>
	</footer>
</template>
