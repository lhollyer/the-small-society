<script>
	import Container from '$lib/components/container.svelte';
	import houseElephant from "$lib/assets/images/carousel-images/house-elephant.jpg";
</script>

<Container>
	<div class="w-full">
		<h1>Welcome to The small Society</h1>
		<p>
			We provide free accommodation to carers at a house in Deal ['house in deal' links to About Care for Carers Page]. Our aim ['Our aim' possibly links to the 'About TsS' Page] is to aid the mental health and wellbeing of those who spend their time caring for others.
		</p>
		<p>
			There are two separate accomodations on site ['two separate accomodations on site' links to Gallery] in which guest can stay for free, if you are interested in staying please contact us ['contact us' links to the Contact Us Page] and also have a read of the FAQ ['FAQ' links to the FAQ Page].
		</p>
	</div>

	<div>
		<img
			class="object-scale-down"
			src="dealhp.png"
			alt="Aerial view of Deal seafront"
		/>
	</div>

	<div class="flex flex-col md:flex-row justify-center md:space-x-14 mt-10 pb-10">
		<a href="/about-tss">
			<div class="homepage-styled-buttons text-center hover-styling">	
				<h2>More about the Small society </h2>
			</div>
		</a>
		<a href="/gallery">
			<div class= "homepage-styled-buttons hover-styling">	
				<h2> Gallery </h2>
			</div>
		</a>
		<a href="/contact-us">
			<div class= "homepage-styled-buttons hover-styling">	
				<h2> Get in touch </h2>
			</div> 
		</a>
	</div>

	<div>
		<img
			class="object-scale-down"
			src={houseElephant}
			alt="Metal statue of Elephant"
		/>
	</div>
	
</Container>
 
<style lang="postcss">
	p {
		@apply pb-5;
	}
</style>
