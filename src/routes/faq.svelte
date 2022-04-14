<script>
	import Container from '$lib/components/container.svelte';
</script>

<Container>
    <h1>Our FAQs</h1>

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingOne">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Is the accommodation suitable for wheelchairs?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              Unfortunately not, as the ground is on two levels with access via a flight of stairs.
            </div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingTwo">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How much will it staying with you cost? 
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              As this is the first year of operation, we have made the decision to not currently charge for our facilities. This will be reviewed for future years.
            </div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingThree">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Can I leave a donation?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              Of course, we would gratefully receive any donation you are able to make. All donations will go to future years operation costs. 
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingFour">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Do the rooms have TV's and Radios?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              No, but you will have access to WiFI meaning you will be able to use your personal devices that you choose to bring. 
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingFive">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Can I park my car on site? 
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              We are unable to offer onsite parking, with the nearest parking approximately 100m away. <br>
              The local train station is located 400m away from our property, which we reccommend you use. 
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingSix">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              Are Pets allowed?
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              Sorry, unfortunately we do not allow pets onsite. 
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingSeven">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              Where are the nearest shops to the property?
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              There is an Aldi and Sainsbury by the train station (approx. 10 mins walk) and Deal town centre is a little further. 
              There are plenty of facilities in the local area and we encourage you to explore as part of your stay with us. 
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingEight">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              Can I help with the gardening? 
            </button>
          </h2>
          <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              Absolutely! If you think you will want to help with gardening, please leave a note on your booking form so we are aware.<br>
              Alternatively when you are onsite, please ask a member of staff who will be able to help.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingNine">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
              Do the staff have any qualification and training - apart from food hygiene?
            </button>
          </h2>
          <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              Our staff are solely onsite to support the running of the accommodation - although they will be happy to chat for a little while.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingTen">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
              Does Care for Carers (TsS) provide any other assistance?
            </button>
          </h2>
          <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              Not at the moment - we will update this website and any other comms in the future if this changes.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingEleven">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
              Are there any other locations for Care for Carers?
            </button>
          </h2>
          <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              Not at the moment.
            </div>
          </div>
        </div>


      </div>

</Container>

<style lang="postcss">
	.expanding {
		@apply accordion-button relative flex items-center w-full py-4 text-base text-header-blue font-bold 
        text-left rounded-none transition focus:outline-none;

	}
    .expanding:not(.collapsed) {
        @apply bg-background-beige text-header-blue;
        box-shadow: inset 0 -1px 0 rgb(25, 43, 59);
    }

</style>

