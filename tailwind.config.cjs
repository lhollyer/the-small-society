const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],

	theme: {
		extend: {
			colors: {
				'light-blue': '#ABC3C9',
				'navbar-hover': '#c1d8de',
				'header-blue': '#44749D',
				'subheader-blue': '#004469',
				'background-beige': '#f0f7fa'
			}
		},
		fontFamily: {
			sans: ['Poppins']
		}
	},

	plugins: [
		require('tw-elements/dist/plugin')
	]
};

module.exports = config;
