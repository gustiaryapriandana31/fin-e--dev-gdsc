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
      spacing: {
        38: "9.5rem",
        42: "10.5rem",
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
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },
  plugins: [],
};
