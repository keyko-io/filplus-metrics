/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "chart-blue": "#2196F3",
        "chart-orange": "#FF5722"
      }
    }
  },
  plugins: []
};
