<script>
	import Container from '$lib/components/container.svelte';
	import houseElephant from "$lib/assets/images/carousel-images/garden-elephant.jpg";
</script>

<Container>
	<div class="w-full">
		<h1>Welcome to The small Society</h1>
		<p>
			The small Society provides carers with <a href="/gallery">two separate accomodations</a>, on the same tranquil site in <a href="/about-care-for-carers">Deal</a>.
		</p>
		<p>
			<a href="/about-tss">Our aim</a>, by offering these resources free of charge is to support the mental health and wellbeing of those who spend their time caring for others. 
		</p>
		<p> 
			If you are interested in staying or know someone else who may qualify, please <a href="/contact-us">contact us</a>. You can also read the <a href="/faq">FAQS</a> to find out more.
		</p>
	</div>

	<div>
		<iframe width="750" height="420" class="md:w-[730px] w-[340px] flex m-auto" src="https://www.youtube.com/embed/jSY4P4Rgm0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>

	<div class="flex flex-col md:flex-row justify-center md:space-x-16 mt-14 pb-14">
		<a href="/about-tss">
			<div class="homepage-styled-buttons text-center hover-styling">	
				<h2 class="button-text-styling" > More about The small Society </h2>
			</div>
		</a>
		<a href="/gallery">
			<div class= "homepage-styled-buttons hover-styling">	
				<h2 class="button-text-styling"> Gallery </h2>
			</div>
		</a>
		<a href="/contact-us">
			<div class= "homepage-styled-buttons hover-styling">	
				<h2 class="button-text-styling"> Get in touch </h2>
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
	a {
		@apply text-homepage-link-blue hover:text-yellow-800;
	}
</style>
