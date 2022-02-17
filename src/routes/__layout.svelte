<script>
	import Navbar from '$lib/components/navbar.svelte';

	import '../app.css';
</script>

<Navbar />

<slot />



<style lang="postcss">
	:global(h2) {
		@apply px-5 text-2xl text-red-900;
	}
</style>