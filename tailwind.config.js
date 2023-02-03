/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1'
          }
        },
        'fade-in-up' : {
          '0%': {
            opacity: '0',
            transform: 'translateY(200px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            visibility: 'hidden',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            visibility: 'visible',
            transform: 'translateY(0)'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            visibility: 'hidden'
          }
        }
      },
      animation: {
        'fade-in' : 'fade-in 1s ease-in 1s 1 forwards',
        'fade-in-up' : 'fade-in-up 1s ease-out',
        'fade-in-down' : 'fade-in-down 0.5s ease-out',
        'fade-out' : 'fade-out 0.5s ease-out'
      }
    },
  },
  plugins: [],
}