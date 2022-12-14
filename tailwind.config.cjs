/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./dist/**/*.{html,css,js}",
        "./dist/*.{html,css,js}",
        "./public/**/*.{html,css,js}",
        "./public/*.{html,css,js}",
        "./src/**/*.{html,css,js}",
        "./resources/**/*.{html,css,js}",
        "./resources/*.{html,css,js}",
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
