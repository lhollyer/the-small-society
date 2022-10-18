<script lang="ts">
	import type { ImageMetadata } from '$lib/types/ImageCarousel';

	import ImageCarousel from '$lib/components/Carousel/imageCarousel.svelte';

	import houseSunset from '$lib/assets/images/carousel-images/house-sunset.jpg';
	import houseRustic from '$lib/assets/images/carousel-images/house-rustic.jpg';
	import houseFoliage from '$lib/assets/images/carousel-images/house-foliage.jpg';
	import houseGarden from '$lib/assets/images/carousel-images/house-garden.jpg';
	import houseBedRail from '$lib/assets/images/carousel-images/house-bed-rail.jpg';
	import houseBed from '$lib/assets/images/carousel-images/house-bed.jpg';
	import houseBookshelf from '$lib/assets/images/carousel-images/house-bookshelf.jpg';
	import houseJars from '$lib/assets/images/carousel-images/house-jars.jpg';
	import houseRusticBed from '$lib/assets/images/carousel-images/house-rustic-bed.jpg';
	import houseTable from '$lib/assets/images/carousel-images/house-table.jpg';

	const images: ImageMetadata[] = [
		{
			src: houseSunset,
			altText: 'Garden view of the house during a sunset'
		},
		{
			src: houseRustic,
			altText: 'Exterior of accommodation'
		},
		{
			src: houseFoliage,
			altText: 'View of the house through the garden'
		},
		{
			src: houseGarden,
			altText: 'View of the garden and stairs'
		},
		{
			src: houseBedRail,
			altText: 'Railing next to the bed'
		},
		{
			src: houseBed,
			altText: 'Upstairs bedroom in the house'
		},
		{
			src: houseBookshelf,
			altText: 'Bookshelf along the wall'
		},
		{
			src: houseJars,
			altText: 'Tea, coffee & sugar jars on the counter'
		},
		{
			src: houseRusticBed,
			altText: 'Bedroom in the rustic accommodation'
		},
		{
			src: houseTable,
			altText: 'Table with garden view from the house'
		}
	];

</script>

<ImageCarousel {images} carouselId="houseCarousel"/>
