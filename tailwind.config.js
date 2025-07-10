/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0F172A', // Slate 900
        surface: '#1E293B', // Slate 800
        primary: '#F8FAFC', // Slate 50
        secondary: '#94A3B8', // Slate 400
        accent: '#38BDF8', // Sky 400
        'accent-hover': '#7DD3FC', // Sky 300
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'neon-accent': '0 0 10px #38BDF8, 0 0 20px #38BDF8, 0 0 30px #38BDF8',
      },
    },
  },
  plugins: [],
}
