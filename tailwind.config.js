/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {},
    },
    darkMode: "class",
    plugins: [nextui({
      themes: {
        dark: {
          // 50: "#100F22" background: '#020111'
          colors: {
            background: '#151515',
            secondary: {
              50: "#1C1C1C",
              DEFAULT: "#1C1C1C",
              foreground: "#000000",
            },
          }, // dark theme colors
        },

      }
    })]
  }