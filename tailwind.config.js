/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // for my case I like using /src dir :D
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"]
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(at 50% 100%, #873740 0%, #272730 40%, #171720 80%, #070710 100%)"
      },
      keyframes: {
        spinner: {
          "0%, 100%": {
            transform: "rotate(0deg)",
            borderColor: "currentColor transparent transparent transparent"
          },
          "25%": {
            transform: "rotate(90deg)",
            borderColor: "#F00 transparent transparent transparent"
          },
          "50%": {
            transform: "rotate(180deg)",
            borderColor: "#0F0 transparent transparent transparent"
          },
          "75%": {
            transform: "rotate(260deg)",
            borderColor: "#00F transparent transparent transparent"
          },
          "100%": {
            transform: "rotate(360deg)",
            borderColor: "#00F transparent transparent transparent"
          }
        }
      },
      animation: {
        spinner: "spinner 1s linear infinite"
      }
    }
  },
  plugins: []
}
