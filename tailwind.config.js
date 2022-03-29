// tailwind.config.js
const colors = require("tailwindcss/colors");

const customColors = require("./colors.json")


console.log("🚀 ~ file: tailwind.config.js ~ line 7 ~ colors.gray", colors.gray)

console.log("🚀 ~ file: tailwind.config.js ~ line 5 ~ customColors", customColors)

module.exports = {
    content: ["./src/**/*.{js, scss}", "./views/**/*.liquid"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            // xl: '1440px',
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            acapulco: customColors.acapulco
        },
    },
    plugins: [],
};
