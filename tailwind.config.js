/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portal-blue': { DEFAULT: '#1a365d', light: '#2c5282', dark: '#0f2744' },
      },
    },
  },
  plugins: [],
}
