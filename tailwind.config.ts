import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        df: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      backgroundImage: {
        'saint-bg': "url('/assets/images/saintjohnnpc.png')",
      },
      colors: {
        background: {
          'light-black': '#222222',
        },
        roman: {
          'gray': '#CCCBCB',
          'yellow': '#DAA520',
          'dark-yellow': '#A4780B',
          'light-red': '#C80027',
          'dark-red': '#8E001C'
        }
      },
      boxShadow: {
        'small': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'weak': '0 8px 15px rgba(0, 0, 0, 0.3)',
        'strong': '0 8px 15px rgba(0, 0, 0, 0.7)',
        'extra-strong': '0 10px 25px rgba(0, 0, 0, 0.85)',
      },
    },
  },
  plugins: [

    plugin(function ({ matchUtilities, theme }: { matchUtilities: any, theme: any }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
