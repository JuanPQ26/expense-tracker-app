/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#005cbb",
          50: "#e8f0fe",
          100: "#c6dafc",
          200: "#92bdf9",
          300: "#5e9ff5",
          400: "#2b82f1",
          500: "#005cbb",
          600: "#004a96",
          700: "#003872",
          800: "#00264d",
          900: "#001429",
        },
        income: {
          DEFAULT: "#059669",
          50: "#ecfdf5",
          100: "#d1fae5",
        },
        expense: {
          DEFAULT: "#dc2626",
          50: "#fef2f2",
          100: "#fee2e2",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
