module.exports = {
  mode: 'jit',
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
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
      colors: {
        aorc: {
          sabz: '#1dd1a1',
          dark: "#2836A0",
          darkblue: "#00228f",
          bg: "#f8fbff",
          blue: "#0210de",
          banafsh: "#a122f1",
          lightblue: "#03caf4",
          textabi: "#556495",
          lightbanafsh: "#b6b5cb",
          bnf: "#520ccc",
          abi: "#0719f1",
          lightabi: '#e7f2ff',
          khaki: '#e3bb85',
        },
      },
      boxShadow: {
        // myShadowBox: "0 9px 30px rgb(56 169 224 / 15%)",
        myShadowBox: "0 9px 30px rgb(193 229 243 / 51%)",
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
      gradientColorStops: ['active', 'group-hover'],
      filter: ['hover', 'focus'],
      grayscale: ['hover', 'focus'],
      padding: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
};