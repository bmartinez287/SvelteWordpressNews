/** @type {import('tailwindcss').Config} */
const colors = require('./src/lib/colors.tailwind');
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        colors,
        extend: {},
    },
    plugins: [],
}