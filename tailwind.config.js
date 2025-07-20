module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // includes all JS/TS/React files in /src
        "./public/index.html",         // optional: if you use classes in index.html
    ],
    theme: {
        extend: {
            // You can customize Tailwind here
            colors: {
                primary: '#1D4ED8',  // example custom color
                secondary: '#9333EA',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}