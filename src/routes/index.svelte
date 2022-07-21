<script>
	import Container from '$lib/components/container.svelte';
	import houseElephant from "$lib/assets/images/carousel-images/house-elephant.jpg";
</script>

<Container>
	<div class="w-full">
		<h1>Welcome to The small Society</h1>
		<p>
			Pete Dennis is the founder of The small Society, the umbrella organisation for
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

	<div>
		<img
			class="object-scale-down"
			src="dealhp.png"
			alt="Aerial view of Deal seafront"
		/>
	</div>

	<div class="flex flex-row justify-center space-x-14">
		<a href="/about-tss">
			<div class="w-52 h-28 mt-10 p-2 flex items-center text-center bg-light-blue border-4 border-header-blue hover:border-slate-800 hover:bg-mid-blue">	
				<h2>More about the Small society </h2>
			</div>
		</a>
		<a href="/gallery">
			<div class= "w-52 h-28 mt-10 p-2 flex items-center justify-center bg-light-blue border-4 border-header-blue hover:border-slate-800 hover:bg-mid-blue">	
				<h2> Gallery </h2>
			</div>
		</a>
		<a href="/contact-us">
			<div class= "w-52 h-28 mt-10 mb-10 p-2 flex items-center justify-center bg-light-blue border-4 border-header-blue hover:border-slate-800 hover:bg-mid-blue">	
				<h2> Get in touch </h2>
			</div> 
		</a>
	</div>

	<div>
		<img
			class="object-scale-down"
			src={houseElephant}
			alt="Front view of the property"
		/>
	</div>

</Container>

<style lang="postcss">
	p {
		@apply pb-5;
	}
</style>
