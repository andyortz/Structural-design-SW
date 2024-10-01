/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#172375',
        customOrange: '#EA722D',
      },
      fontFamily: {
        secular: ['Secular One'],
        roboto: ['Roboto']
      },
      backgroundColor: {
        'customBG': 'rgba(125, 223, 7, 0.7)' 
      },
    },
  },
  plugins: [],
}

