/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        burtons: "burtons, sans-serif",
      },
    },
    screens: {
      sm: { min: "375px", max: "767px" },

      md: { min: "768px" },

      lg: { min: "1024px" },

      xl: { min: "1200px" },

      "2xl": { min: "1200px" },
    },
  },
  plugins: [],
};
