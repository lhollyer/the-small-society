<script lang="ts">
	import type { ImageMetadata } from '$lib/types/ImageCarousel';

	import ImageCarousel from '$lib/components/Carousel/imageCarousel.svelte';

  import gardenBackWall from '$lib/assets/images/carousel-images/garden-back-wall.jpg';
  import gardenBalcony from '$lib/assets/images/carousel-images/garden-balcony.jpg';
  import gardenBedpost from '$lib/assets/images/carousel-images/garden-bedpost.jpg';
  import gardenHeron from '$lib/assets/images/carousel-images/garden-heron.jpg';
  import gardenChairs from '$lib/assets/images/carousel-images/garden-chairs.jpg';
  import gardenKoi from '$lib/assets/images/carousel-images/garden-koi.jpg';
  import gardenPlantPots from '$lib/assets/images/carousel-images/garden-plant-pots.jpg';
  import gardenSink from '$lib/assets/images/carousel-images/garden-sink.jpg';
  import gardenPlant from '$lib/assets/images/carousel-images/garden-plant.jpg';
  import gardenSeating from '$lib/assets/images/carousel-images/garden-seating.jpg';
  import gardenthistle from '$lib/assets/images/carousel-images/garden-thistle.jpg';
  import gardenWall from '$lib/assets/images/carousel-images/garden-wall.jpg';
	import gardenWell from '$lib/assets/images/carousel-images/garden-well.jpg';
	import gardenElephant from "$lib/assets/images/carousel-images/garden-elephant.jpg";
	import gardenPond from "$lib/assets/images/carousel-images/garden-pond.jpg";
	import gardenFish from "$lib/assets/images/carousel-images/garden-fish.jpg";

  const images: ImageMetadata[] = [
		{
			src: gardenBackWall,
			altText: 'Old castle wall behind the garden'
		},
		{
			src: gardenBalcony,
			altText: 'Outdoor seating on the balcony'
		},
		{
			src: gardenBedpost,
			altText: 'Bedpost hung on the outside wall'
		},
		{
			src: gardenHeron,
			altText: 'Heron ornament'
		},
		{
			src: gardenChairs,
			altText: 'Metal outdoor chairs'
		},
		{
			src: gardenKoi,
			altText: 'Close up of koi fish in the pond'
		},
		{
			src: gardenSink,
			altText: 'Outdoor sink'
		},
		{
			src: gardenPlant,
			altText: 'Close up of a plant'
		},
		{
			src: gardenSeating,
			altText: 'Outdoor deck chairs & table'
		},
		{
			src: gardenthistle,
			altText: 'Close up of thistle in the garden'
		},
		{
			src: gardenWall,
			altText: 'Outdoor brick wall with decorations'
		},
		{
			src: gardenWell,
			altText: 'Well in the garden'
		},
		{
			src: gardenElephant,
			altText: 'Large elephant ornament in the garden'
		},
		{
			src: gardenPond,
			altText: 'Pond in the garden'
		},
		{
			src: gardenFish,
			altText: 'Fish in the pond'
		}
	];
</script>

<ImageCarousel {images} carouselId="gardenCarousel"/>
