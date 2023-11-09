module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber: { 800: "#ff900e" },
        gray: {
          100: "#f7f7f7",
          200: "#e8e8e8",
          700: "#585858",
          900: "#1c1c1c",
          "100_01": "#f2f2f2",
        },
        blue_gray: {
          100: "#d2d2d2",
          400: "#868686",
          900: "#2f2b2b",
          "900_1e": "#2f2f2f1e",
        },
        blue: { A400: "#337fff" },
        light_blue: { 900: "#006699", A200: "#33ccff" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        orange: { 100: "#fed6a7" },
        yellow: { 900: "#ff7426" },
        deep_orange: { 300: "#ff825e" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs2: "0px 5px  24px 0px #2f2f2f1e",
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "inset 0px 4px  4px 0px #0000003f",
      },
      fontFamily: {
        gilroysemibold: "Gilroy-SemiBold",
        gilroybold: "Gilroy-Bold",
        poppins: "Poppins",
        inter: "Inter",
        montserrat: "Montserrat",
        dmseriftext: "DM Serif Text",
        delagothicone: "Dela Gothic One",
        roboto: "Roboto",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
