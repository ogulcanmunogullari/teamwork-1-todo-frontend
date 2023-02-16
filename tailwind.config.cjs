/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-background': '#D6E6F2',
        'light-input-background': '#F7FBFC',
        'light-border': '#B9D7EA',
        'light-text': '#769FCD',
        'dark-background': '#303F49',
        'dark-input-background': '#52616B',
        'dark-border': '#C9D6DF',
        'dark-text': '#F0F5F9',
      },
    },
  },
  plugins: [],
};
