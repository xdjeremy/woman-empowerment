module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    colors: {
      pink: '#f318a3',
      blue: '#2203Ec',
      white: '#f1f1f1',
      black: '#1b1b1e',
    },
  },
  plugins: [require('daisyui')],
}
