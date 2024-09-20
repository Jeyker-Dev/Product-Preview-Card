/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: [
    require('./src/lib/mypreset'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

