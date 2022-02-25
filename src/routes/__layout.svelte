<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	import '../app.css';
</script>

<Navbar />

<div class="px-64 pt-14 min-h-screen">
	<slot />
</div>

<Footer />

<style lang="postcss">
	:global(h1) {
		@apply text-3xl font-semibold text-header-blue pb-5;
	}
	:global(h2) {
		@apply px-5 text-2xl text-red-900;
	}
	:global(body) {
		@apply bg-background-beige;
	}
	:global(h3) {
		@apply p-8 text-3xl font-semibold;
	}

	:global(p) {
		@apply leading-7;
	}
</style>