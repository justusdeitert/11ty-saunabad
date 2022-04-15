// tailwind.config.js
const colors = require("tailwindcss/colors");
const customColors = require("./colors.json");

module.exports = {
	content: ["./src/**/*.{js, scss}", "./views/**/*.liquid"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1920px"
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			// black: colors.black,
			// white: colors.white,
			// gray: colors.gray,
			// indigo: colors.indigo,
			// red: colors.rose,
			// yellow: colors.amber,
			blue: customColors.blue,
			yellow: customColors.yellow,
			sienna: customColors.sienna,
			green: customColors.green,
			shilo: customColors.shilo,
			lila: customColors.lila,
			dark: customColors.dark,
		},
		fontFamily: {
			sans: ["Mukta", "ui-sans-serif", "system-ui"],
			serif: ["Rosario", "ui-serif", "Georgia"],
			display: ["Limelight", "Oswald"],
		},
		fontSize: {}
	},
	plugins: [],
};
