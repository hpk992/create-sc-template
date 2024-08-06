import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        header: 'var(--font-header)',
        body: 'var(--font-body)',
      },
      colors: {
        primary: {
          1: 'var(--primary-1)',
          2: 'var(--primary-2)',
          3: 'var(--primary-3)',
          4: 'var(--primary-4)',
          5: 'var(--primary-5)',
          6: 'var(--primary-6)',
          7: 'var(--primary-7)',
          8: 'var(--primary-8)',
          9: 'var(--primary-9)',
          hover: 'var(--primary-4)',
        },
        secondary: {
          1: 'var(--secondary-1)',
          2: 'var(--secondary-2)',
          3: 'var(--secondary-3)',
          4: 'var(--secondary-4)',
          5: 'var(--secondary-5)',
          6: 'var(--secondary-6)',
          7: 'var(--secondary-7)',
          8: 'var(--secondary-8)',
          9: 'var(--secondary-9)',
        },
        accent: {
          1: 'var(--accent-1)',
          2: 'var(--accent-2)',
          3: 'var(--accent-3)',
        },
        grey: {
          1: 'var(--grey-1)',
          2: 'var(--grey-2)',
          3: 'var(--grey-3)',
          4: 'var(--grey-4)',
          5: 'var(--grey-5)',
          6: 'var(--grey-6)',
          7: 'var(--grey-7)',
          8: 'var(--grey-8)',
          9: 'var(--grey-9)',
        },
      },
      textColor: {
        1: '',
        2: '',
        3: '',
        invert: {
          1: '',
          2: '',
          3: '',
        },
      },
      backgroundColor: {
        1: '',
        2: '',
        invert: {
          1: '',
        },
      },
      borderColor: {
        1: '',
        dividers: {
          1: '',
          2: '',
        },
      },
      maxWidth: {
        container: '',
      },
    },
  },
  plugins: [],
};
export default config;
