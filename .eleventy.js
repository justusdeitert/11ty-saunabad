const htmlmin = require('./utils/htmlmin');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const Image = require('@11ty/eleventy-img');
const fs = require('fs');
const isProd = process.env.NODE_ENV === 'production';
const path = require('path');

// https://www.11ty.dev/docs/plugins/image/
async function imageShortcode(src, alt, sizes, classes) {
	if (!fs.existsSync(src)) {
		src = './src/images/placeholder.jpg';
	}

	let metadata = await Image(src, {
		widths: [300, 600, 1000],
		formats: ['webp', 'jpeg'],
		urlPath: '/images/',
		outputDir: './dist/images/',
		filenameFormat: function (id, src, width, format, options) {
			const extension = path.extname(src);
			const name = path.basename(src, extension);

			// name: filename
			// id: hash of the original image
			// src: original image path
			// width: current width in px
			// format: current file format
			// options: set of options passed to the Image call
			return `${name}-${width}.${format}`;
		},
	});

	let imageAttributes = {
		class: classes,
		alt,
		sizes,
		loading: 'lazy',
		decoding: 'async',
	};

	// You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
	return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
	// https://www.11ty.dev/docs/shortcodes/#universal-shortcodes
	eleventyConfig.addShortcode('hash', () => Date.now());

	// https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
	if (isProd) {
		eleventyConfig.addTransform('htmlmin', htmlmin);
	}

	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
	eleventyConfig.addWatchTarget('./src/');

	// https://www.11ty.dev/docs/plugins/navigation/
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addLiquidShortcode('image', imageShortcode);

	// https://www.11ty.dev/docs/copy/
	eleventyConfig.addPassthroughCopy({
		// object as (src glob): (dest)
		'./src/images/favicon.svg': './favicon.svg',
		'./src/images/bar.jpg': './images/bar.jpg',
		'./src/images/saunagarten.jpg': './images/saunagarten.jpg',
	});

	return {
		dir: {
			input: 'views',
			output: 'dist',
			layouts: 'layouts',
			includes: 'includes',
			data: 'data',
		},
	};
};
