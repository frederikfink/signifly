const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "inter"],
        mono: ["Jetbrains Mono", "jetbrains-mono"],
      },
    },
    colors: {
      "green-darker": "#153C36",
      "green-normal": "#205A52",
      "green-bright": "#5AC484",
      "green-light": "#E1F4F1",
      "purple-light": "#F3ECFD",
      "purple-normal": "#7C3AED",
      "red-darker": "#A42828",
      "red-normal": "#D34B4B",
      "red-light": "#FBEFEF",
      "yellow-normal": "#FFB020",
      "yellow-light": "#FFF8EB",
      "base-900": "#121315",
      "base-800": "#1D2022",
      "base-700": "#393C3F",
      "base-600": "#62626D",
      "base-500": "#8D8D94",
      "base-400": "#A1A1A8",
      "base-300": "#CFCED2",
      "base-200": "#E0E1E4",
      "base-100": "#EFF0F3",
      "base-50": "#F7F8FA",
      "base-0": "#FFFFFF",
      "base-1000": "#000000",
    },
  },
  plugins: [],
};

module.exports = config;
