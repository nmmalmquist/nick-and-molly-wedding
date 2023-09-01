<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import FadeInImage from '$lib/components/FadeInImage.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login to client account" />
</svelte:head>

<section class="h-screen flex flex-col justify-center items-center">
	<h1 class="text-3xl">Sign In</h1>
	<form method="post" action="?/login" class="flex flex-col border border-black p-20 m-5 rounded">
		<TextInput class="bg-primary" label="Email" name="email" placeholder="email" />
		<div class="mt-2">
			<TextInput class="bg-primary" label="Password" name="password" placeholder="Password" />
		</div>
		<Button text="Login" type="submit" otherClasses="mt-10" />
		<Button text="Create Account" href="/auth/register" otherClasses="mt-2 bg-black text-white" />
	</form>
</section>
