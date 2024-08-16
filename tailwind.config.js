/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E76F00 ",
        second: "#264653",
        third: "#B2B2B2",
      },
    },
  },
  plugins: [],
};
