/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ['Russo One', ...defaultTheme.fontFamily.sans],
        itim: ['Itim'],
        nunito: ['Nunito']
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1'
          }
        },
        'fade-in-up': {
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
            transform: 'translateY(-100px)'
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
        },
        'typing': {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        'blink-caret': {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'orange' },
          '100%': { borderColor: 'transparent' }
        }
      },
      boxShadow: {
        'neon': 'inset 0px -11px 12px -10px #EF4444'
      },
      transitionDelay: {
        '0': '0ms',
        '1000': '1000ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms'
      },
      animation: {
        'typing': 'typing 3.5s steps(30, end)',
        'blink-caret': 'blink-caret .5s step-end infinite',
        'fade-in': 'fade-in 1s ease-in 1s 1 forwards',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'fade-out': 'fade-out 0.5s ease-out'
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}