/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        title: ["Merriweather", "serif"],
      },
      colors: {
        "color-body": "#E5E5E5",
        "color-main": "#F4F5FA",
        "color-text": "#171435",
      },
      boxShadow: {
        edges: "0px 47px 57px -26px rgba(83, 83, 144, 0.14)",
      },
    },
  },
  plugins: [],
}
