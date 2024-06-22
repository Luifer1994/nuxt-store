module.exports = {
  darkMode: 'class', // o 'media' si prefieres usar las preferencias del sistema
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
        '7xl': '80rem', // Ajusta este valor según tus necesidades
      },
    },
  },
  plugins: [],
}
