<script>
	import Container from '$lib/components/container.svelte';
	import houseElephant from "$lib/assets/images/carousel-images/garden-elephant.jpg";
</script>

<Container>
    <h1>About The small Society</h1>
    <br>
    <div class="mb-10">
    <p>
        The primary aim of The small Society is to support those who care for others, with particular emphasis, although not exclusively, on those caring for people with mental disorders. This will be achieved by providing a place of refuge for short term breaks and help with funding for respite purposes.
    </p>
    <br>
    <p>
        In addition, we plan to provide information and resources that will further the understanding of issues around mental health, with the intention of highlighting the struggles of those who spend their lives supportng an increasing number of vulnerable people in society, and for whom funding is most lacking.
    </p>
    </div>
    <div>

    <h1>About the Trustees</h1>
    <p>Insert text here</p>
    <img
			class="object-scale-down"
			src={houseElephant}
			alt="Metal statue of Elephant"
		/>
    </div>
</Container>
