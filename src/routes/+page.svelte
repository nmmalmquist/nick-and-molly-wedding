<script lang="ts">
	import FadeInImage from '$lib/components/FadeInImage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Nicks website home" />
</svelte:head>

<section class="h-screen relative flex justify-center items-center">
	<FadeInImage
		imagePath={data.backgroundImagePath}
		alt="background"
		otherClasses="absolute object-cover"
	/>
	<div class="z-10 flex flex-col justify-center items-center m-3">
		<h1 class="text-4xl text-center lg:text-6xl transition-all duration-500">
			Welcome to our story.
		</h1>
		<a
			href="/gallery"
			class="px-12 mt-3 py-1 text-lg lg:text-2xl border border-black hover:bg-primary w-min transition ease-in-out duration-500 whitespace-nowrap hover:text-tertiary hover:border-tertiary transition-all duration-500"
			>See our day.</a
		>
	</div>
</section>
