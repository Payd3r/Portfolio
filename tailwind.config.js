/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00FFFF',
        'neon-purple': '#BC00FF',
        'neon-green': '#39FF14',
        'dark-bg': '#0D0221',
        'dark-surface': '#221C35',
      },
    },
  },
  plugins: [],
}
