<script lang="ts">
	import type { ImageMetadata } from '$lib/types/ImageCarousel';

	import ImageCarousel from '$lib/components/Carousel/imageCarousel.svelte';

  import localAbandonedBoat from "$lib/assets/images/carousel-images/local-abandoned-boat.jpg";
  import localBuildings from "$lib/assets/images/carousel-images/local-buildings.jpg";
  import localBoatFerry from "$lib/assets/images/carousel-images/local-boat-ferry.jpg";
  import localSea from "$lib/assets/images/carousel-images/local-sea.jpg";
  import localBoats from "$lib/assets/images/carousel-images/local-boats.jpg";
  import localPier from "$lib/assets/images/carousel-images/local-pier.jpg";
  import localWalls from "$lib/assets/images/carousel-images/local-walls.jpg";

  const images: ImageMetadata[] = [
		{
			src: localAbandonedBoat,
			altText: 'New and old boats on the beach'
		},
		{
			src: localBuildings,
			altText: 'Buildings in Deal'
		},
		{
			src: localBoatFerry,
			altText: 'New boat and passing ferry'
		},
		{
			src: localSea,
			altText: 'Sea view of Deal'
		},
		{
			src: localBoats,
			altText: 'Fishing boats'
		},
		{
			src: localPier,
			altText: 'Deal pier'
		},
		{
			src: localWalls,
			altText: 'Walls around Deal'
		}
	];
</script>

<ImageCarousel {images} carouselId="localAreaCarousel"/>
