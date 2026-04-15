/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'balance-blue': '#002855',
                'balance-teal': '#008B8B',
            },
        },
    },
    plugins: [],
}