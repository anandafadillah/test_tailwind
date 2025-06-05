/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#ec4899",
        secondary: "#94a3b8",
        dark: "#020617",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
