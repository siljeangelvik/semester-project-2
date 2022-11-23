/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./dist/**/*.{html,css,js}",
        "./dist/*.{html,css,js,svg}",
        "./public/**/*.{js,css}",
        "./public/*.{js,css,svg}",
        "./src/**/*.{js,ts,jsx,tsx,css}",
        "./*.{html,css,js,svg}",
    ],
    theme: {
        extend: {
            colors: {
                'secondary': {
                    '50': '#f9f6fa',
                    '100': '#f3ecf6',
                    '200': '#e2d0e8',
                    '300': '#d0b3db',
                    '400': '#ad7abf',
                    '500': '#8a41a4',
                    '600': '#7c3b94',
                    '700': '#68317b',
                    '800': '#532762',
                    '900': '#442050'
                }
            }
        },
    },
    plugins: [],
}
