// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundColor: {
        primary: "#6ca7f5",
        secondary: "#FFFFFF",
        accent: "#5a9ffa",
      },
      textColor: {
        primary: "#12130F",
        secondary: "#3B413C",
        accent: "#5a9ffa",
      },
      accentColor: { primary: "#70A37F" },
      fontFamily: { rubik: "Rubik, sans-serif", freehand: "Freehand, cursive" },
      backdropBlur: { xs: "3px" },
      borderColor: {
        primary: "#6ca7f5",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },

  },

  variants: {
    extend: { borderWidth: ["hover", "focus"] },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".underline-animation": {
          position: "relative",
          overflow: "hidden",
          "&:after": {
            content: '""',
            position: "absolute",
            left: "0",
            bottom: "0",
            height: "2px",
            width: "100%",
            "background-color": "currentColor",
            transform: "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover:after": {
            transform: "translateX(0)",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
