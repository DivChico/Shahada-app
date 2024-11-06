/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Tajawal: ["Tajawal", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dbg: "#1B1C1E",
        wbg: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
