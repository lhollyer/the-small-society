<script>
	import Container from '$lib/components/container.svelte';
    import InformationPDF from "$lib/assets/pdfs/CfCFurtherInformation.pdf";
    import AccomodationPDF from "$lib/assets/pdfs/CfCAccomodation.pdf";
</script>

<Container>
    <h1>About Care for Carers</h1>

    <div class="flex flex-col md:flex-row justify-center">
            <div class="cfc-styled-buttons text-center bg-light-blue border-4 border-header-blue hover:border-slate-800 hover:bg-mid-blue">
                <a class="btn btn-primary" href={InformationPDF} download>
                    <h2>Find out more about Care for Carers (PDF) </h2>
                </a>
             </div>

            <div class="cfc-styled-buttons text-center bg-light-blue border-4 border-header-blue hover:border-slate-800 hover:bg-mid-blue">
                <a class="btn btn-primary" href={AccomodationPDF} download>
                    <h2>Find out more about our accomodation (PDF) </h2>
                </a>
             </div>
    </div>

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
        <h2>The Space in Deal</h2>
        <p>
            It is the two beautiful spaces on the land that Pete has decided to turn into a charity, offering that same
            peace that he found all those years ago, to people who spend their lives in the service and
            care of others and who need a chance for respite and recuperation themselves. This grew
            partially out of Pete's own experience, before and after successful treatment, of being cared
            for by friends and caring for others. The charity also has five other trustees on the team.<!--
            (?Hyperlink to photo of everyone in case people worry that Pete is just a lunatic..)-->
        </p>
        <p>
            The summer of 2022 will be the first time that Care for Carers goes live, with a trial run to
            see how things work in practice. Following this we plan to open for applications at various times throughout the year.
        </p>
        <p>
            Details of the accommodation can be found further on this website and Pete is always
            happy for you to contact him, preferably by email in the first instance.
        </p>
    </div>

    <div>
        <h2>History of the site</h2>
        <p> 
            The site was obtained around 1780-1800 by the Chitty Family who owned several windmills
            in the local area. Wellington House (the big house on the main road) was built for them
            during this period. The milling business was extended in 1870 with the introduction of steam
            power and three additional pairs of stones.
        </p>
        <p>
            As well as the steam mill, a managers house and 5 workers' cottages (known as Caledonian
            Cottages) were built in the Mill Yard, where the remains of these have been incorporated into
            the Outside House.
        </p>
        <p>
            Before 1877 the original windmill had been demolished and by 1898 the steam mill had also
            ceased to function and was partially demolished. A stable, coach house and garage were built
            on the site for Wellington House, and there is some evidence that the site was then used as a
            small holding, with livestock possibly grazing on the allotments. The Caledonian Cottages
            were demolished in the 1950's.
        </p>
        <p>
            Apart from the boundary walls there was very little remaining of the original mill when Pete
            bought the site. <!--(LINK)--> The stable and coach house which still standing and have been left
            pretty much untouched during renovations.
        </p>
        <p>
            The design of the Outside House is modern while trying to keep as many original features as
            possible, while the guest accommodation sits on the same line as Caledonian Cottages and
            takes up approximately the space of two dwellings, where two families would have lived.
        </p>
    </div>

    <div>
        <h2>Naming of the Outside House</h2>
        <p>
            Christened by Pete's goddaughter, Isobel (then age 4), when it was still a building site, and
            in order to distinguish it from his Inside House which had a roof. At the time the land was
            still unregistered and the name has stuck - as has the sign that she helpfully provided.
        </p>
        <div class="flex justify-around h-96">
            <img
                class="object-scale-down h-96 w-120"
                src="outside-house-sign.jpg"
                alt="The Outside House sign"
            />
        </div>
    </div>
</Container>

<style lang="postcss">
	p {
		@apply pb-5;
	}

    div {
        @apply pt-10;
    }
</style>