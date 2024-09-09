/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: 'var(--primary-color-one)',
        primary2: 'var(--primary-color-two)',
        secondary: 'var(--secondary-color)',
        black: 'var(--black-color)',
        white: 'var(--white-color)',
      },
    },
  },
  plugins: [],
};
