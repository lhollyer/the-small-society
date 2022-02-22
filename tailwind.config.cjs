const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'light-blue': '#ABC3C9',
				'navbar-hover': '#c1d8de',
				'header-blue': '#44749D',
				'background-beige': '#f0f7fa'
			}
		},
		fontFamily: {
			sans: ['Poppins']
		}
	},

	plugins: []
};

module.exports = config;
