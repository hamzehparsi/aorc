module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        aorc: {
          dark: "#2836A0",
          darkblue: "#00228f",
          bg: "#f8fbff",
          blue: "#0210de",
          banafsh: "#797e9c",
          lightblue: "#03caf4",
          textabi: "#556495",
          lightbanafsh: "#cccbda",
          bnf: "#6302c6",
        },
      },
      boxShadow: {
        myShadowBox: "0 9px 30px rgb(56 169 224 / 15%)",
      },
      fontSize: {
        xxs: ".6rem",
      },
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      fontWeight: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
