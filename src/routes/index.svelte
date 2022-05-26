<script>
	import Container from '$lib/components/container.svelte';
</script>

<Container>
	<div class="w-full">
		<h1>Welcome to The small Society</h1>
		<p>
			Pete Dennis is the founder of the SMALL society, the umbrella organisation for
			Care for Carers.
		</p>
		<p>
			Pete found his home in Deal, Kent, 10 minutes walk from the sea, at an abandoned steam
			mill over 10 years ago. At the time, his bipolar disorder was still undiagnosed and untreated,
			but he recognised it as a place where he could settle and find peace.
		</p>
		<p>
			He bought the property and land and started to build, using his skill as an engineer. Being
			bipolar meant that the project grew and grew, took shape, changed, halted, while other
			projects took over, and then changed again.
		</p>
		<p>
			This meant that not only did Pete build himself a house during the renovation (The Outside
			House), but that he had got side-tracked and accidentally added two more separate, living
			spaces - which meant he had room to spare.
		</p>
	</div>

	<div class="pt-10 pb-1">
		<p> Find out more about The small Society and what its goals are. </p>
	</div>
	<div class="flex justify-around h-96">
		<a href="/gallery" class="relative h-96">
			<div class="absolute w-full h-1/3 bg-gradient-to-l from-gray-50 to-transparent right-0 mt-0.5 mr-0.5 opacity-80">
				<h3 class="absolute right-0">About The small Society</h3>
			</div>
			<img
				class="object-scale-down h-96 w-120 border-2 border-header-blue"
				src="house.jpeg"
				alt="Front view of the house"
			/>
		</a>
	</div>

	<div class="pt-10 pb-1">
		<p> Find out more about Care for Careers and what its goals are. </p>
	</div>
	<div class="flex justify-around h-96">
		<a href="/gallery" class="relative h-96">
			<div class="absolute w-full h-1/3 bg-gradient-to-l from-gray-50 to-transparent right-0 mt-0.5 mr-0.5 opacity-80">
				<h3 class="absolute right-0">About Care for Careers</h3>
			</div>
			<img
				class="object-scale-down h-96 w-120 border-2 border-header-blue"
				src="rustic.jpeg"
				alt="Rustic accommodation view"
			/>
		</a>
	</div>

	<div class="pt-10 pb-1">
		<p> Take a look through our Gallery and see more of our site & the local area. </p>
	</div>
	<div class="flex justify-around h-96">
		<a href="/gallery" class="relative h-96">
			<div
				class="absolute w-full h-1/3 bg-gradient-to-l from-gray-50 to-transparent right-0 mt-0.5 mr-0.5 opacity-80"
			>
				<h3 class="absolute right-0">Gallery</h3>
			</div>
			<img
				class="object-scale-down h-96 w-120 border-2 border-header-blue"
				src="deal.jpeg"
				alt="Deal beach"
			/>
		</a>
	</div>

</Container>

<style lang="postcss">
	p {
		@apply pb-5;
	}
</style>
