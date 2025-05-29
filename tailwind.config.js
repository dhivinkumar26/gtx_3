/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust this path if needed
  theme: {
    extend: {
      fontFamily: {

        sans: ["'Plus Jakarta Sans', sans-serif"],
        jakarta: ["'Plus Jakarta Sans', sans-serif"],
        Source : ["'Source Sans Pro', sans-serif"],

      },
    },
  },
  plugins: [],
};
