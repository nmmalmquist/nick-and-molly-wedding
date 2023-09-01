<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = HTMLInputAttributes & { label?: string };
	$: props = $$props as $$Props;
</script>

<div class="flex flex-col">
    {#if props.label}
    <label for={props.name}>{props.label}</label>
    {/if}
    <input {...props} class={`border border-black bg-white rounded py-1 px-2 ${props.class}`} />
</div>
