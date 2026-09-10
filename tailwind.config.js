/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#ffffff',
        muted: '#f5f8fa',
        subtle: '#edf3f6',
        ink: '#152536',
        line: { DEFAULT: '#d4dfe7', light: '#bacbd7' },
        accent: '#007c91',
        steel: { 100: '#152536', 200: '#304457', 300: '#465b6d', 400: '#526678', 500: '#5b6e7e', 600: '#627383', 700: '#718292', 800: '#8595a3' },
        cyan: { 300: '#006779', 400: '#007c91', 500: '#006b7e' },
        green: { 400: '#23814d' },
        amber: { 400: '#946514' },
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
