/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,svelte}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'albert-sans': ['Albert Sans', 'sans-serif']
    }
  },
  // daisyui: {
  //   themes: ["bumblebee","halloween","dark","light"]
  // },
  // plugins: [require("daisyui")],
}
