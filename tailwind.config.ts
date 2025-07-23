import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#EBDAA8',
        primary: '#313930',
        'primary-light': '#A2BBA0',
        secondary: '#CA9C8D',
        white: '#FFFFFF',
      },
      fontFamily: {
        'petit-cochon': ['Le Petit Cochon', 'cursive'],
      },
      borderRadius: {
        'custom': '15px',
      },
    },
  },
  plugins: [],
}

export default config 