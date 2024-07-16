/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        // => @media (min-width: 400px) { ... }

        md: "721px",
        // => @media (min-width: 700px) { ... }
      },
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
