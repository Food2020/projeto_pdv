/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

  ],
  safelist: [
    'bg-indigo-500',
    'bg-green-500',
    'bg-amber-500',
    'bg-sky-500',
    'bg-red-500'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
