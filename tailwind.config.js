/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f6e5c',
        primaryHover: '#175446',
        secondary: '#f5f4ef',
        accent: '#c99b3b',
        textDark: '#2d3748',
        textLight: '#718096',
        cardBg: '#ffffff',
      },
      fontFamily: {
        sans: ['"Lyon Arabic Display"', 'Tajawal', 'Cairo', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
