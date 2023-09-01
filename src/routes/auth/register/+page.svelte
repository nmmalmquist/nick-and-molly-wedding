<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
</script>

<svelte:head>
	<title>Register</title>
	<meta name="description" content="Register for an account" />
</svelte:head>

<section class="h-screen flex flex-col justify-center items-center">
	<h1 class="text-3xl">Create an Account</h1>
	<form
		method="post"
		action="?/register"
		class="flex flex-col border border-black p-20 m-5 rounded"
	>
		<TextInput class="bg-primary" label="First Name" name="first-name" placeholder="First name" />
		<TextInput class="bg-primary" label="Last Name" name="last-name" placeholder="Last name" />
		<TextInput class="bg-primary" label="Email" name="email" placeholder="Email" />
		<div class="mt-2">
			<TextInput class="bg-primary" label="Password" name="password" placeholder="Password" />
		</div>
		<Button text="Submit" type="submit" otherClasses="mt-10" />
	</form>
</section>
