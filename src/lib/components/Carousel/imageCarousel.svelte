<script lang="ts">
	import type { ImageMetadata } from '$lib/types/ImageCarousel';

	export let images: ImageMetadata[] = [];
  export let carouselId: string;
</script>

<div id={carouselId} class="carousel slide carousel-fade relative pb-4" data-bs-ride="carousel">
	<!-- create slideshow at the bottom of the carousel users can click through -->
	<div
		class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 pb-4"
	>
		{#each images as _, i}
			{#if i == 0}
				<button
					type="button"
					data-bs-target={`#${carouselId}`}
					class="active"
					aria-current="true"
					data-bs-slide-to={0}
					aria-label="Slide 1"
				/>
			{:else}
				<button
					type="button"
					data-bs-target={`#${carouselId}`}
					data-bs-slide-to={i}
					aria-label="Slide {i + 1}"
				/>
			{/if}
		{/each}
	</div>

	<!-- set images to be used in carousel -->
	<div class="carousel-inner relative w-full overflow-hidden">
		{#each images as image, i}
			<div class={`carousel-item float-left w-full ${i === 0 ? 'active' : ''}`}>
				<img src={image.src} class="block w-full" alt={image.altText} />
			</div>
		{/each}
	</div>

	<!-- create buttons to navigate between images -->
	<button
		class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
		type="button"
		data-bs-target={`#${carouselId}`}
		data-bs-slide="prev"
	>
		<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
		<span class="visually-hidden">Previous</span>
	</button>
	<button
		class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
		type="button"
		data-bs-target="{`#${carouselId}`}"
		data-bs-slide="next"
	>
		<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
		<span class="visually-hidden">Next</span>
	</button>
</div>
