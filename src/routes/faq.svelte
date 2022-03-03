<script>
	import Container from '$lib/components/container.svelte';
</script>

<Container>
    <h1>Our FAQs</h1>

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingOne">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Why was Care for Carers setup?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              Care for Carers is a programme that we have set up to stem from our main charity - The small Society.
              If you would like to find out more about The small Society, please click on the 'TsS' tab above.<br> 
              Our mission is to provide support for those who spend a significant proportion of their everyday lives caring / supporting others. 
              We hope to provide a small opportunity for those people to have some respite.
            </div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingTwo">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Where is Care for Carers?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
                We are located in Deal, East Kent.<br>
                One of the prettiest seaside towns in Kent, Deal is a tiny but terrific hidden gem. It boosts an excellent 
                range of independent shops, 2 weekly markets, 2 castles, wonderful architecture, a pier and 3 small museums 
                all within walking distance. <br> 
                In regards to the exact location of our property, we will provide this on confirmation of your stay with us. 
            </div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingThree">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              I would like to apply for a stay - how do I do this? 
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              Great news!<br>
              To provide a consistent process for everyone, we ask that you complete our application form if you wish to spend 
              some time with us. <br>
              This form will provide us all the information we need about yourself and your desired stay, as well as providing
              more information about the accomodation that we offer. 
              Once the application has been received, we will aim to be in contact with you within 3 weeks. 
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header mb-0" id="headingFour">
            <button class="expanding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              What accomodation do you offer?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4 px-5">
              We offer three different areas of accomodation - cute shed, quaint outhouse and adorable hut.<br>
              All accomodation will offer similar amenities - a bedroom, ensuite facilities, an area to make a cup of tea and relax. 
              <strong>Please note</strong> that we cannot guarantee that any accomodation is fully accessible and so we have inculuded 
              further information on this within our application form. We ask that you review the provided information prior to 
              making a booking.  
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

