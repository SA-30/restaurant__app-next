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
        primaryColor: '#151518',
        secondaryColor: '#1B1B20',
        ternaryColor: '#3E3E42',
        adminbgColor: '#252836',
        admindarkColor: '#1F1D2B',
        adminblueColor: '#828EFF',
        adminredColor: '#F07070',
        admingreenColor: '#50D1AA',

      },
    },
  },
  plugins: [],
}
export default config