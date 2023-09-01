<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.svg';
</script>

<nav class={`flex justify-between px-4 md:px-16 lg:px-24 py-2fixed z-10 w-full absolute`}>
	<a href="/">
		<img src={logo} alt="logo" class="h-20" />
	</a>
	<ul class="flex items-center">
		<li class="mr-24">
			<a class="text-blue-500 hover:text-blue-800" href="/gallery">Gallery</a>
		</li>
		<li class="">
			<a class="text-blue-500 hover:text-blue-800" href="/auth/login">Login</a>
		</li>
	</ul>
</nav>
