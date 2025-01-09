/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.stories.{js,jsx,ts,tsx}",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};