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
	:global(*) {
		@apply font-poppins;
	}
	:global(h1) {
		@apply text-3xl font-semibold text-header-blue pb-5;
	}
	:global(h2) {
		@apply text-xl text-subheader-blue pb-4;
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
