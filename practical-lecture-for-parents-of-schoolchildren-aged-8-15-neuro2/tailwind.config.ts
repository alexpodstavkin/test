import type { Config } from 'tailwindcss';

/**
 * Zerocoder brand design system.
 * Source: Desktop/Зерокодер/дизайн-система-брендов/zerocoder-design-system.md
 *
 * Single typeface — Manrope (cyrillic + latin). Hierarchy through scale + weight.
 * Palette: Heliotrope #B15EFF + emerald CTA #00E48D + neutral ink scale.
 * Radius cap — 20px (DS). Transitions — opacity 0.2s ease-in-out.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.16em' }],
        caption: ['0.8125rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.55' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        heading: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'display-sm': [
          'clamp(1.5rem, 3vw, 2rem)',
          { lineHeight: '1.1', letterSpacing: '-0.02em' },
        ],
        'display-md': [
          'clamp(1.75rem, 4.5vw, 2.75rem)',
          { lineHeight: '1.05', letterSpacing: '-0.025em' },
        ],
        'display-lg': [
          'clamp(1.85rem, 5.5vw, 3.5rem)',
          { lineHeight: '1.02', letterSpacing: '-0.03em' },
        ],
      },
      colors: {
        canvas: '#FBFBFB',
        surface: '#F1F1F1',
        brand: {
          50: '#F8EEFF',
          100: '#EAD2FF',
          300: '#C58BFF',
          500: '#B15EFF',
          600: '#9B51E0',
          700: '#7C3FB4',
        },
        cta: {
          400: '#1AE89A',
          500: '#00E48D',
          600: '#00C97C',
          700: '#00A865',
        },
        ink: {
          50: '#F7F7F7',
          100: '#EDEDED',
          200: '#D9D9D9',
          500: '#5A5A5A',
          700: '#323232',
          800: '#262626',
          900: '#1B1B1B',
        },
        night: '#222222',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '15px',
        xl: '20px',
        '2xl': '20px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(27, 27, 27, 0.04), 0 14px 30px -18px rgba(27, 27, 27, 0.14)',
        cardHover: '0 1px 2px rgba(27, 27, 27, 0.06), 0 28px 60px -28px rgba(27, 27, 27, 0.22)',
        ctaGlow: '0 18px 40px -16px rgba(0, 228, 141, 0.55)',
        brandGlow: '0 18px 40px -16px rgba(177, 94, 255, 0.45)',
      },
      transitionDuration: { DEFAULT: '200ms' },
      transitionTimingFunction: { DEFAULT: 'ease-in-out' },
    },
  },
  plugins: [],
};

export default config;
