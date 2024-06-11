/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neueHaasDisplayBlack: ["NeueHaasDisplayBlack", "sans-serif"],
        neueHaasDisplayBold: ["NeueHaasDisplayBold", "sans-serif"],
        neueHaasDisplayLight: ["NeueHaasDisplayLight", "sans-serif"],
        neueHaasDisplayMedium: ["NeueHaasDisplayMediu", "sans-serif"],
        neueHaasDisplayThin: ["NeueHaasDisplayThin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
