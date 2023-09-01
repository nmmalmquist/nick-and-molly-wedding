<script lang="ts">
	export let imagePath: string;
	export let alt: string;
	export let otherClasses: string = '';

    let imageLoaded = false;
</script>

<img
	src={imagePath}
	{alt}
	class={`h-full w-full transition duration-500 ease-in opacity-0 ${
		imageLoaded && 'opacity-100'
	} ${otherClasses}`}
	on:load={() => (imageLoaded = true)}
/>
