/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#000000",
        secondaryBlack: "#121212",
        tertiaryBlack: "#1a1a1a0",
        quatuaryBlack: "#2a2a2aaa",
        hoverBgColor: "#404040",
        textColorPrimary: "#ffffff",
        textColorSecondary: "#a7a7a7",
        bgTransparentPrimary: "#ffffff10",
        bgTransparentSecondary: "#ffffff15",
        bgTransparentTertiary: "#000000cc",
      },
    },
  },
  plugins: [],
}

