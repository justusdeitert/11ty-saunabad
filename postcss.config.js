const isProd = process.env.NODE_ENV === "production";

module.exports = {
	syntax: "postcss-scss",
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		cssnano: isProd && {
			preset: "default",
		},
	},
};