/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "#DBAC2C",
        "yellow-light": "#F1E9C9",
        "yellow-dark": "#C47F17",
        "purple-dark": "#4B2995",
        "purple": "#8047F8",
        "purple-light": "#EBE5F9",
        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574F4D",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",
        "base-button": "#EDEDED",
        "base-card": "#F3F2F2",
        "background": "#FAFAFA",
        "white": "#FFFFFF"

      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title-xl': ['48px', { lineHeight: '130%', fontWeight: '800', fontFamily:"baloo" }],
        'title-l': ['32px', { lineHeight: '130%', fontWeight: '800' }],
        'title-m': ['24px', { lineHeight: '130%', fontWeight: '800' }],
        'title-s': ['20px', { lineHeight: '130%', fontWeight: '700' }],
        'title-xs': ['18px', { lineHeight: '130%', fontWeight: '700' }],
        'text-l': ['20px', { lineHeight: '130%', fontWeight: '400' }],
        'text-m': ['16px', { lineHeight: '130%', fontWeight: '400' }],
        'text-s': ['14px', { lineHeight: '130%', fontWeight: '400' }],
        'text-xs': ['12px', { lineHeight: '130%', fontWeight: '700' }],
        tag: ['10px', { lineHeight: '130%', fontWeight: '700' }],
        'button-g': ['14px', { lineHeight: '160%', fontWeight: '400' }],
        'button-m': ['12px', { lineHeight: '160%', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}