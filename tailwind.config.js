module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Layout: {
          100: "#F9F9F9",
          300: '#E1E1E1',
          500: "#7C7C7C",
          700: "#1A1A1A",
        },
        Primary: {
          White: "#fff",
          Gunmetalgrey: "#293241",
          Darkblue: '#161E40',
          Pinkcus: '#ff1e54',
          Rosecus: '#ff5b83',
          Greencus: '#006770'
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }

    },
  },
  plugins: [],
}