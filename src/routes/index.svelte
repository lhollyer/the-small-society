<script>
	import Container from '$lib/components/container.svelte';
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

		<div>
			<img
				class="object-scale-down"
				src="dealhp.png"
				alt="Aerial view of Deal seafront"
			/>
		</div>


		<a href="/about-tss">
			<div class="mt-10 pt-2 px-2 bg-light-blue border-4 border-header-blue hover:border-slate-800">	
				<h2> Want to know more about us?</h2>
				<p>
					Want to find out more about The small Society and what we provide? Please take a look here for more information.
				</p>
			</div>
		</a>

		<a href="/gallery">
			<div class="mt-10 pt-2 px-2 bg-light-blue border-4 border-header-blue hover:border-slate-800">	
				<h2>Have a look around! </h2>
				<p>
					We have numerous photos from both our accomodation and the local area for you to look through. 
				</p>
			</div>
		</a>

		<a href="/contact-us">
			<div class="mt-10 mb-10 pt-2 px-2 bg-light-blue border-4 border-header-blue hover:border-slate-800">	
				<h2>Get in touch </h2>
				<p>
					If you have any questions, please feel free to either email us or use the provided form with any questions you many have.
				</p>
			</div>
		</a>

		<div>
			<img
				class="object-scale-down"
				src="house.jpeg"
				alt="Front view of the property"
			/>
		</div>

	</div>
</Container>

<style lang="postcss">
	p {
		@apply pb-5;
	}
	h2 {
		@apply text-center;
	}
</style>
