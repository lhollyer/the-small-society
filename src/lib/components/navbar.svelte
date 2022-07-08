<nav
	class="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  bg-light-blue
  text-slate-800
  shadow-lg
  navbar navbar-expand-lg navbar-light
	min-h-[80px]
	mb-2 lg:mb-8
  "
>
	<div class="
		container-fluid
		w-full flex
		flex-wrap items-center
		lg:justify-center
		whitespace-nowrap">
		<button
			class="
				navbar-toggler
				border-0
				hover:shadow-none hover:no-underline
				py-5 px-5
			"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
		>
			<!-- create hamburger icon -->
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="bars"
				class="w-6"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<path
					fill="currentColor"
					d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
				/>
			</svg>
		</button>

		<div
			class="collapse navbar-collapse flex-grow items-center justify-between"
			id="navbarSupportedContent"
		>
			<a
				class="
						flex
						items-center
					"
				href="/"
			>
				The small Society
			</a>

			<!-- middle links -->
			<ul class="navbar-nav flex flex-col list-style-none lg:justify-center">
				<li class="w-full">
					<a href="/about-tss">About TsS</a>
				</li>
				<li class="w-full">
					<a href="/about-care-for-carers">About Care for Carers</a>
				</li>
				<li class="w-full">
					<a href="/gallery">Gallery</a>
				</li>
				<li class="w-full">
					<a href="/contact-us">Contact Us</a>
				</li>
			</ul>

			<div class="w-[213px]" />
		</div>
	</div>
	<a href="/faq">Frequently Asked Questions</a>
</div>

<style lang="postcss">
	a {
		@apply px-5 text-xl flex hover:bg-navbar-hover hover:transition-all delay-75 h-20 items-center;
	}
</style>
