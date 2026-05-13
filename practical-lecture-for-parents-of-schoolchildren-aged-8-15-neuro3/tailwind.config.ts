import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F6EBFF',
          100: '#EAD2FF',
          300: '#C68BFF',
          500: '#B15EFF',
          600: '#9B51E0',
        },
        cta: {
          400: '#1AE89A',
          500: '#00E48D',
          600: '#00C77A',
          700: '#00A765',
        },
        ink: {
          900: '#222222',
          800: '#262626',
          700: '#323232',
          500: '#5A5A5A',
          300: '#A0A0A0',
          100: '#E5E5E5',
          50: '#F1F1F1',
        },
        surface: {
          canvas: '#FBFBFB',
          mute: '#F1F1F1',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '3px',
        md: '5px',
        lg: '10px',
        xl: '12px',
        '2xl': '15px',
        '3xl': '20px',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};

export default config;
