module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        card: '#1e1e26',
        dark: '#14151a'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
