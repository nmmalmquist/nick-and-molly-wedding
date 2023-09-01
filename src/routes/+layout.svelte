<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="app font-thin">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
