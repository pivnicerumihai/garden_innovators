// tailwind.config.js
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx,mdx}",'./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#79b473',
        'secondary': '#FFFFFF',
        'accent': '#70A37F',
      },
      textColor:{
        'primary': '#12130F',
        'secondary': '#3B413C',
        'accent': '#70A37F',
      },
      accentColor:{      'primary': '#70A37F'},
      fontFamily:{'rubik': 'Rubik, sans-serif', 'freehand': 'Freehand, cursive'},
      backdropBlur: {xs:'3px'},

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
