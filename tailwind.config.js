/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        neue: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
      },
      backgroundImage: {
        plate: "url('/src/assets/piring.png')",
      },
    },
  },
  plugins: [],
};
