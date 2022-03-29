// tailwind.config.js
const colors = require("tailwindcss/colors");

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
        },
    },
    plugins: [],
};
