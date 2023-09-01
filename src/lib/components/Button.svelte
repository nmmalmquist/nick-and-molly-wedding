<script lang="ts">
	type $$Props =
		| { text?: string; otherClasses?: string } & (
				| {
						onClick?: () => void;
						href?: undefined;
						type?: 'submit' | 'reset' | 'button' | null | undefined;
				  }
				| {
						href: string;
						type?: undefined;
						onClick?: undefined;
				  }
		  );

	$: props = $$props as $$Props;

	const BASE_CLASSES = 'bg-secondary rounded-sm px-2 py-1 hover:bg-primary';
</script>

{#if props.href}
	<a href={props.href} class={`${BASE_CLASSES} text-center ${props.otherClasses}`}>
		{props.text}
	</a>
{:else}
	<button
		on:click={props.onClick}
		class={`${BASE_CLASSES} ${props.otherClasses}`}
		type={props.type}
	>
		{props.text}
	</button>
{/if}
