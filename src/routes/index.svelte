<script>
	import Carousel from '$lib/components/carousel.svelte';
	import Container from '$lib/components/container.svelte';
</script>

<Carousel />

<Container>
	<div class="w-full pb-10">
		<h1>Welcome to The small Society</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
			ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
			nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
			esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
			in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</div>

	<div class="flex justify-around h-96">
		<img
			class="object-scale-down h-96 w-120 border-2 border-header-blue"
			src="house.jpeg"
			alt="Front view of the house"
		/>
		<img
			class="object-scale-down h-96 w-120 border-2 border-header-blue"
			src="rustic.jpeg"
			alt="Rustic accommodation view"
		/>
	</div>

	<div class="flex justify-around h-96 py-20">
		<a href="/gallery" class="relative h-96">
			<div
				class="absolute w-full h-1/3 bg-gradient-to-l from-gray-50 to-transparent right-0 mt-0.5 mr-0.5 opacity-80"
			>
				<h3 class="absolute right-0">Gallery</h3>
			</div>
			<img
				class="object-scale-down h-96 w-120 border-2 border-header-blue"
				src="deal.jpeg"
				alt="Front view of the house"
			/>
		</a>
	</div>
</Container>
