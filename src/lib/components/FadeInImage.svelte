<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	type $$Props = HTMLImgAttributes;
	$: props = $$props as $$Props;

	let imageLoaded = false;
</script>

<img
	{...props}
	src={props.src}
	alt={props.alt}
	class={`h-full w-full transition duration-500 ease-in opacity-0 ${imageLoaded && 'opacity-100'} ${
		props.class
	}`}
	on:load={() => (imageLoaded = true)}
/>
