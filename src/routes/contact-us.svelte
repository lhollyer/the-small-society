<script>
	import Container from '$lib/components/container.svelte';
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
        <form>
            <div>
                <label for="name">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value=""
                />
            </div>
            <div>
              <label for="name">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value=""
              />
          </div>
            <button type="submit">Submit</button>
          </form>
</Container>

<style lang="postcss">
    * {
        box-sizing: border-box;
        }
        form {
        display: flex;
        flex-direction: column;
        width: 300px;
        }

        form > div{
        display: flex;
        justify-content: space-between;
        }

        form > div + * {
        margin-top: 10px;
        }
</style>