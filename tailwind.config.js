// tailwind.config.js
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx,mdx}","./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#6ca7f5',
        'secondary': '#FFFFFF',
        'accent': '#6ca7f5',
      },
      textColor:{
        'primary': '#12130F',
        'secondary': '#3B413C',
        'accent': '#6ca7f5',
      },
      accentColor:{      'primary': '#70A37F'},
      fontFamily:{'rubik': 'Rubik, sans-serif', 'freehand': 'Freehand, cursive'},
      backdropBlur: {xs:'3px'},
      borderColor: {
        'primary': '#6ca7f5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
