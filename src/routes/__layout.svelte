<script>
	import Navbar from '$lib/components/navbar.svelte';

	import '../app.css';
</script>

<Navbar />

<div class="px-64 pt-14">
	<slot />
</div>

<style lang="postcss">
	:global(h1) {
		@apply text-3xl font-semibold text-green-900 pb-5;
	}
	:global(h2) {
		@apply px-5 text-2xl text-red-900;
	}
	:global(body) {
		@apply bg-orange-50;
	}
	:global(h3) {
		@apply p-8 text-3xl font-semibold;
	}
</style>