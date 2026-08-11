/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'void':        '#05050A',
        'panel':       '#0D0D18',
        'panel-raised':'#12121F',
        'magenta':     '#FF2E9A',
        'cyan':        '#0FF0FC',
        'purple':      '#7B2FFF',
        'green':       '#39FF9E',
        'text-primary':'#EDEDF5',
        'text-secondary':'#9A9AB0',
        'text-muted':  '#5C5C70',
      },
      fontFamily: {
        orbitron:  ['Orbitron', 'sans-serif'],
        mono:      ['JetBrains Mono', 'monospace'],
        sans:      ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(255,46,154,0.25) 0%, rgba(123,47,255,0.12) 35%, rgba(5,5,10,0) 70%)',
        'cta-gradient': 'linear-gradient(90deg, #FF2E9A 0%, #7B2FFF 100%)',
        'divider': 'linear-gradient(90deg, transparent 0%, #0FF0FC 50%, transparent 100%)',
      },
      animation: {
        'pulse-dot': 'pulseDot 1.8s infinite ease-in-out',
        'float':     'float 3s ease-in-out infinite',
        'scanline':  'scanmove 8s linear infinite',
      },
      keyframes: {
        pulseDot: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        scanmove: { '0%': { backgroundPosition: '0 0' }, '100%': { backgroundPosition: '0 100vh' } },
      },
    },
  },
  plugins: [],
}
