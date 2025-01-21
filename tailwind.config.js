const pxToRem = (px, baseFontSize = 10) => `${px / baseFontSize}rem`;
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#F2542D',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
