/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultConfig');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important:true,
  theme: {
    extend: {
      ...defaultTheme,
      colors:{
        ...defaultTheme.colors,
        primary:"#6360FF",
        while:"#ffffff",
        text:{
          DEFAULT:"#ffffff",
          light:"#6360FF"
        },
        light:{
          DEFAULT:"#FAFBFC",
          lighter:"#F3F4F6"
        }
      }
    },
  },
  plugins: [],
}
