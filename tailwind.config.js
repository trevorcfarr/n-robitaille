export default {
	content: ["./src/**/*.tsx", "./src/**/*.css"],
	plugins: [require("@tailwindcss/forms"), require("tailwindcss-motion")],
	theme: {
		fontFamily: {
			sans: ["Avenir", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			backgroundImage: {
				"header-tile": 'url("../src/images/header_tile.jpg")',
			},
		},
	},
};
