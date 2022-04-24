const isProd = process.env.NODE_ENV === "production";

module.exports = {
	syntax: "postcss-scss",
	plugins: [
		require("postcss-import"),
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		require("autoprefixer"),
		require("@csstools/postcss-sass"),
		isProd && require("cssnano")({ preset: "default" }),
	],
};
