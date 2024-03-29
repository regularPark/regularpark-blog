import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    dark: 'class',
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-dark': '#22333b',
        'primary-light': '#f2f2f2',
        'primary-selection': '#9f322f',
      },
      fontFamily: {
        nanum: ['var(--font-nanum-square)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
