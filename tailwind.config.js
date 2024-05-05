/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins-SemiBold", "sans-serif"],
      poppinsItalic: ["Poppins-SemiBoldItalic", "serif"],
    },
    extend: {
      colors: {
        customBlue: "#365486",
      },
    },
  },
  plugins: [],
};
