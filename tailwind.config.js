module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Layout: {
          100: "#F9F9F9",
          300: "#E1E1E1",
          500: "#7C7C7C",
          600: "#6B6B6B",
          700: "#1A1A1A",
        },
        Primary: {
          White: "#fff",
          Gunmetalgrey: "#293241",
          Darkblue: "#161E40",
          Pinkcus: "#ff1e54",
          Rosecus: "#ff5b83",
          Greencus: "#006770",
          CautionOrange: "#EE6C4D",
        },
        Error: {
          400: "#FF1F00",
        },
        YellowOrange: {
          400: "#FCD069",
        },
        Active: {
          400: "#FF7DA5",
        },
        my: {
          1: "rgba(249, 249, 249, 0.70)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "9xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "1s": "0px 4px 25px 0px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        primaryviolet: "linear-gradient(90deg, #FF1E54 0%, #FF5B83 100%)",

        primarycolor:
          "linear-gradient(105deg, #F4C4F3 -16.94%, #B675FC 117.6%)",
        bgcake: "linear-gradient(74deg, #000 0%, rgba(0, 0, 0, 0.40) 61.66%)",
        lolo: "linear-gradient(105deg, #F4C4F3 -16.94%, #B675FC 117.6%)",
      },
    },
  },
  plugins: [],
};
