<script>
	import Container from '$lib/components/container.svelte';

  const submitForm = async (data) => {
    const formData = new FormData(data.currentTarget);

    const res = await fetch("contact.json", {
      method: "POST",
      body: formData,
    });

  };
</script>

<Container>
    <h1>Contact Us!</h1>
    <div>
        <p>
            If you have any questions, please feel free to get in touch.
        </p>
        <br>
        <p>
            Please allow for a turnaround for us to read your message and reply to you - we hope this to take no longer than a week. 
        </p>


        <form on:submit|preventDefault="{submitForm}">
          <div>
            <label for="">
              Email
            </label>
            <input type="email" id="email" name="email" value="" />
          </div>
          <div>
            <label for="">
              Your Query
            </label>
            <input type="text" id="query" name="query" value="" />
          </div>
          <div>
            <input type="submit" /> 
          </div>
        </form> 
</Container>

<style lang="postcss">
  div {
    margin-bottom: 1em;
  }
</style>