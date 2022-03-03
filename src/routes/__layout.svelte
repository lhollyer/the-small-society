<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import { onMount } from 'svelte';

	onMount(async() => {
		import('tw-elements');
	});
</script>

<Navbar />

<slot />

<Footer />

<style lang="postcss">
	:global(h1) {
		@apply text-3xl font-semibold text-header-blue pb-5;
	}
	:global(h2) {
		@apply px-5 text-xl text-subheader-blue;
	}
	:global(body) {
		@apply bg-background-beige;
	}
	:global(h3) {
		@apply py-7 px-10 text-3xl font-semibold;
	}

	:global(p) {
		@apply leading-7;
	}
</style>
