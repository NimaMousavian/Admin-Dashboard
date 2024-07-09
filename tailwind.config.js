/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        cs: "0px 20px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primary: { main: "#7b3efb", light: "#efe5fe" },
      },
    },
  },
  plugins: [],
};
