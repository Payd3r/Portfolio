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
      fontSize: {
        // HEADINGS (Titoli)
        'hero-mobile': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 36px
        'hero-desktop': ['3.5rem', { lineHeight: '4rem', fontWeight: '700' }], // 56px
        'section-mobile': ['1.5rem', { lineHeight: '1.875rem', fontWeight: '700' }], // 24px
        'section-desktop': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }], // 36px
        'card-mobile': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px
        'card-desktop': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '600' }], // 20px
        'subtitle-mobile': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px
        'subtitle-desktop': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '600' }], // 18px
        
        // BODY TEXT (Testo corpo)
        'body-mobile': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 14px
        'body-desktop': ['1rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 16px
        'small-mobile': ['0.75rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 12px
        'small-desktop': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 14px
        
        // COMPONENTI SPECIFICI
        'nav-mobile': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }], // 16px
        'nav-desktop': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }], // 18px
        'button-mobile': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }], // 14px
        'button-desktop': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px
        'caption-mobile': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }], // 12px
        'caption-desktop': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }], // 14px
      },
    },
  },
  plugins: [],
}
