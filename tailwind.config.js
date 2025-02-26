/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './privacy-policy.html'],
  theme: {
    extend: {
      colors:{
        'primary-color': '#2ad2c6',
        'preprimary-color': '#000',
        'customGray': '#38424d',
        'lightGray' : '#747e74'
      },
      animation: {
        'bounce-slow': 'bounceSlow 1s ease-in-out infinite', // Custom bounce slow animation

        slideInLeft: 'slideInLeft 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(0)', // Start and end at original position
          },
          '50%': {
            transform: 'translateY(-10px)', // Move up slightly in the middle of the animation
          },
        },

        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },


           

        
    },
  

    },
    fontFamily:{
      'display' : ['Poppins' , 'sans-serif'],
      'body' : ['Open Sans', 'sans-serif'],
      'Robo': ['Roboto','sans-serif']
      
    }
    
  },
  plugins: [],
}




