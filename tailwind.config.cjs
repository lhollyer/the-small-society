const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],

	theme: {
		extend: {
			colors: {
				'light-blue': '#ABC3C9',
				'mid-blue': '#8cadb5',
				'navbar-hover': '#c1d8de',
				'header-blue': '#44749D',
				'subheader-blue': '#004469',
				'homepage-link-blue': '#0a6494',
				'background-beige': '#f0f7fa'
			}
		},
		fontFamily: {
			poppins: ['Poppins']
		}
	},

	plugins: [
		require('tw-elements/dist/plugin')
	]
};

module.exports = config;
