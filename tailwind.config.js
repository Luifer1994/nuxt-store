module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      colors: {
        primary: '#3490dc',
        error: '#e3342f',
        warning: '#f6993f',
        success: '#38c172',
        // otros colores que necesites
      },
    },
  },
  plugins: [],
}
