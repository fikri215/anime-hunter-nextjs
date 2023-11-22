/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    colors: {
      color: {
        primary: '#E27614',
        accent: '#FFC901',
        secondary: '#1B2335',
        dark: '#0F172A',
        white: '#ffffff'
      }
      // color: {
      //   primary: '#f45325', // appocalyptic orange
      //   accent: '#f3e1c7', // egg liqueur
      //   secondary: '#dccaa8', // honey beige
      //   dark: '#161415' // dynamic black
      // }
    }
  },
  plugins: [],
}
