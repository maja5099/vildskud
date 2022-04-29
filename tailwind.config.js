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
        beige: "#F9F6F4",
      },
      fontFamily: {
        anton: "'Anton', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      backgroundImage: {
        heroBg: "url('/src/img/skammer-du-dig-nu.webp')",
        heroAltKoerer: "url('/src/img/alt-koerer-ik.webp')",
        heroSurt: "url('/src/img/et-surt-opstoed.webp')",
        heroMaskeret: "url('/src/img/maskeret.webp')",
        heroMona: "url('/src/img/mona-lisa-natten.webp')",
        heroStaa: "url('/src/img/staa-ret-faa-ret.webp')",
        heroWish: "url('/src/img/wish.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
