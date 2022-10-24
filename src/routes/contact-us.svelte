<script>
	import Container from '$lib/components/container.svelte';
</script>

<Container>
    <h1>Contact Us</h1>
        <p>
            If you have any questions, please use the below form to get in touch. Alternatively you can email us at <a href="mailto:thesmallsocietycharity@gmail.com"> thesmallsocietycharity@gmail.com </a></p>
        <br>
        <p>
            Please allow for a turnaround for us to read your message and reply to you. 
        </p>

        <br>
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScgSF_HHC52UGF57Ue4jaL34pDYOcF6Bei6fTCnaW-tDcxnIQ/viewform?embedded=true" width="730" height="1000" class="md:w-[730px] w-[340px] flex m-auto" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Container>

<style lang="postcss">
  	a {
		@apply text-header-blue font-semibold
	}
</style>