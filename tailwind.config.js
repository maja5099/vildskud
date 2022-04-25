module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#C6EE56",
        purple: "#DAB7F9",
        red: "#F2443B",
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        anton: "'Anton', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      backgroundImage: {
        heroBg: "url('/src/img/skammer-du-dig-nu.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
