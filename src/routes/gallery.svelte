<script>
	import HouseCarousel from '$lib/components/Carousel/houseCarousel.svelte';
	import LocalAreaCarousel from '$lib/components/Carousel/localAreaCarousel.svelte';
	import Container from '$lib/components/container.svelte';
</script>

<Container>
	<h1>Gallery</h1>
	<h2>Pictures of the accommodation</h2>

	<HouseCarousel />

	<h2>Pictures of the area</h2>

	<LocalAreaCarousel />

</Container>
