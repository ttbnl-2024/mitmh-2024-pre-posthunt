const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class', '.darkmode'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './encrypted/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--title-font)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--serif-font)', ...defaultTheme.fontFamily.serif],
        mono: ['var(--mono-font)', ...defaultTheme.fontFamily.mono],
        smallcaps: ['var(--sc-font)', ...defaultTheme.fontFamily.sans],

        registrationTitle: ['var(--reg-title-font)', ...defaultTheme.fontFamily.sans],
        registrationSerif: ['var(--reg-serif-font)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      screens: {
        desktop: '551px',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
