<script>
	import Container from '$lib/components/container.svelte';
</script>

<Container>
	<div class="w-full pb-10">
		<h1>Welcome to The small Society</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
			ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
			nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
			esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
			in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</div>

	<div class="flex justify-around h-96">
		<img
			class="object-scale-down h-96 w-120 border-2 border-header-blue"
			src="/static/house.jpeg"
			alt="Front view of the house"
		/>
		<img
			class="object-scale-down h-96 w-120 border-2 border-header-blue"
			src="/static/rustic.jpeg"
			alt="Rustic accommodation view"
		/>
	</div>

	<div class="flex justify-around h-96 py-20">
		<a href="/gallery" class="relative h-96">
			<div class="absolute w-1/3 h-1/4 bg-slate-50 z-0 opacity-80 right-0">
				<h3>Gallery</h3>
			</div>
			<img
				class="object-scale-down h-96 w-120 border-2 border-header-blue"
				src="/static/deal.jpeg"
				alt="Front view of the house"
			/>
		</a>
		<img
			class="object-scale-down h-96 w-120 border-2 border-header-blue"
			src="/static/rustic.jpeg"
			alt="Rustic accommodation view"
		/>
	</div>
</Container>

<style lang="postcss">
</style>
