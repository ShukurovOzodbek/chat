/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/components/**/*.{js,vue,ts}",
        "./src/layouts/**/*.vue",
        "./src/pages/**/*.vue",
        "./src/plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ], theme: {
        extend: {},
    },
    plugins: [],
}

