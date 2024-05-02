/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],

  theme: {
    extend: {
      colors: {
        hero: {
          100: "#001D23",
        },
      },

      fontSize: {
        sm: "16px",
        base: "20px",
        xl: "28px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "60px",
        "5xl": "96px",
      },

      fontFamily: {
        display: ["Raleway"],
        body: [],
      },
    },
  },
};
