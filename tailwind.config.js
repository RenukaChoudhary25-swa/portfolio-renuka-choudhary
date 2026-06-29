/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0e1a',
          900: '#0f1629',
          800: '#151d35',
        },
        neon: {
          purple: '#a855f7',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(168, 85, 247, 0.3)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%)',
        'gradient-btn': 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
      },
    },
  },
  plugins: [],
};
