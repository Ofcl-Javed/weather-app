/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      boxShadow: {
        key: "0.125rem 0.125rem 0.03125rem 0.0625rem rgba(238, 238, 238, 0.35)",
      },
    },
  },
  plugins: [],
};
