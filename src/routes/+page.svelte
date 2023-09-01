<script lang="ts">
	import backgroundImage from '$lib/assets/ocean-kiss.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Nicks website home" />
</svelte:head>

<section class="h-screen relative flex justify-center items-center">
	<img src={backgroundImage} alt="background" class="absolute object-cover h-full w-full" />
	<div class="z-10 flex flex-col justify-center items-center">
		<h1 class="text-6xl">Welcome to our story.</h1>
		<a
			href="/gallery"
			class="px-12 py-1 text-xl border border-black hover:bg-primary w-min transition ease-in-out duration-500 whitespace-nowrap"
			>See our day.</a
		>
	</div>
</section>
