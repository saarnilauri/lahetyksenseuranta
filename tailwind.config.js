module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-lg": "url('/static/hero-bg-alt.jpg')",
        "hero-md": "url('/static/hero-bg-alt@0.5x.jpg')",
        "hero-sm": "url('/static/hero-bg-alt@0.25x.jpg')",
      }),
      colors: {
        red: {
          500: "#F71025",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
