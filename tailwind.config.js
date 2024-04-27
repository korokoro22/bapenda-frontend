/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'merahNavbar' : '#BD2B2B',
        'biruFooter'  : '#05045A',
        'biruMuda'    : '#4DBBEB',
        'newBlack'    : '#191919',
        'greenButton' : '#07BC3A'
      },
      fontFamily: {
        'inter': 'Inter',   
      }
    },
  },
  plugins: [],
}

