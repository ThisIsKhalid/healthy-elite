/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',

        },
      },
    },
    extend: {
      backgroundColor: {
        'he-bg-gradient': 'linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)',
        'he-bg': '#F9FBFC'
      },
      boxShadow: {
        'he-shadow': '0px 8px 23px rgba(65, 132, 247, 0.24)',
        'he-shadow-btn': '0px 8px 23px rgba(65, 132, 247, 0.24)',
        'he-shadow-card': '0px 24px 32px -3px rgba(3, 9, 50, 0.04)'
      },
      dropShadow: {
        'he-shadow': '0px 8px 23px rgba(65, 132, 247, 0.24)',
      },
      borderRadius: {
        'he-rounded': '100px'
      },
      textColor: {
        'he-text-primary': 'linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)',
        'he-text-head': '#031432',
        'he-text-paragraph': '#5D7395'
      },
      fontSize: {
        'he-text-h1': '40px',
        'he-text-h3': '32px',
        'he-text-h4': '1.563rem',
        'he-text-p': '16px',
        'he-text-sm': '14px',
      }
    },
  },
  plugins: [],
};
