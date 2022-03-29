const htmlmin = require("./utils/htmlmin");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const isProd = process.env.NODE_ENV === "production";

// https://www.11ty.dev/docs/plugins/image/
async function imageShortcode(src, alt, sizes, classes) {
    let metadata = await Image(src, {
        widths: [300, 600],
        formats: ["avif", "jpeg"],
        outputDir: "./dist/img/",
    });

    let imageAttributes = {
        class: classes,
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    // https://www.11ty.dev/docs/shortcodes/#universal-shortcodes
    eleventyConfig.addShortcode("hash", () => Date.now());

    // https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
    if (isProd) {
        eleventyConfig.addTransform("htmlmin", htmlmin);
    }

    // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
    eleventyConfig.addWatchTarget("./src/");

    // https://www.11ty.dev/docs/plugins/navigation/
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // https://www.11ty.dev/docs/plugins/image/
    eleventyConfig.addLiquidShortcode("image", imageShortcode);

    return {
        dir: {
            input: "views",
            output: "dist",
            layouts: "layouts",
            includes: "includes",
        },
    };
};
