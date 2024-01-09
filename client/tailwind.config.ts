import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-blue': '#1E2DF7',
        'pale-pink': '#F9DEE7',
        'light-gray': '#A0AEC0',
        'grey': '#BBBDBF',
        'base-black': '#1A202C',
        'pale-purple': '#7884FF',
        'aqua-blue': '#00B6C8',
        'pale-blue': '#A2DEE4'
      },
      width:{
        'desktop':'1200px'
      },
    },
  },
  plugins: [],
}
export default config
