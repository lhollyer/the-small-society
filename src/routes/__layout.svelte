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
	:global(body) {
		@apply bg-background-beige;
	}
	:global(h1) {
		@apply text-3xl font-semibold text-header-blue pb-5;
	}
	:global(h2) {
		@apply text-xl text-subheader-blue pb-2;
	}
	:global(h3) {
		@apply py-7 px-10 text-3xl font-semibold;
	}

	:global(p) {
		@apply leading-7;
	}

	:global(.button-text-styling) {
		@apply text-xl text-subheader-blue pb-0;
	}
	:global(.homepage-styled-buttons) {
		@apply w-full md:w-52 h-28 p-2 flex items-center justify-center m-auto mb-5
	}
	:global(.cfc-styled-buttons) {
		@apply w-full md:w-72 h-28 py-10 flex items-center justify-center m-auto mb-5 px-2
	}
	:global(.hover-styling) {
		@apply 	bg-light-blue border-4 border-header-blue hover:border-slate-800 hover:bg-mid-blue
	}

</style>
