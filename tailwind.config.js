/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F18',
        panel: '#0D131F',
        navy2: '#111827',
        navy3: '#1A2332',
        line: { DEFAULT: '#2A3441', light: '#374151' },
        accent: '#00E5FF',
        navy: { 700: '#19273a', 800: '#131f30', 900: '#0d1626', 950: '#0A0F18', 980: '#050913' },
        steel: { 100: '#ffffff', 200: '#d9e0e9', 300: '#a9b4c4', 400: '#8794a7', 500: '#738096', 600: '#536176', 700: '#344256', 800: '#1d2a3b' },
        cyan: { 300: '#66F2FF', 400: '#00E5FF', 500: '#00BDD4' },
        green: { 400: '#56c68a' },
        amber: { 400: '#d6aa58' },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '12%, 88%': { opacity: '.42' },
          '100%': { transform: 'translateY(800%)', opacity: '0' },
        },
        dash: { to: { strokeDashoffset: '-28' } },
        pulseSoft: { '0%, 100%': { opacity: '.45' }, '50%': { opacity: '1' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        scan: 'scan 5s linear infinite',
        dash: 'dash 3s linear infinite',
        'pulse-soft': 'pulseSoft 2.8s ease-in-out infinite',
        marquee: 'marquee 70s linear infinite',
      },
    },
  },
  plugins: [],
};
