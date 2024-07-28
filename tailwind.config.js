/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF',
        customGreen: '#10B981',
        customBlack :'#000000',
        customMixed : '#FFF3E3',
        primary : '#B88E2F',
        fontColor : '#333333',
        white : '#FFFFFF',
        customBlackThin : '#666666',
        customGrey : '#F4F5F7',
        customGreyFont : '#898989'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'poppins' : ['Poppins']
    }
    },
  },
  plugins: [],
}

