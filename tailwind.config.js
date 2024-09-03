/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6f2ff',
          100: '#ede8ff',
          200: '#ded4ff',
          300: '#c7b1ff',
          400: '#ab85ff',
          500: '#9c63ff',
          600: '#8530f7',
          700: '#771ee3',
          800: '#6318bf',
          900: '#52169c',
          950: '#330b6a',
        },
        secondary: '#6B7280',
      },
    },
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@screen lg': {
            maxWidth: '1200px',
            paddingLeft: theme('spacing.5'),
            paddingRight: theme('spacing.5'),
          },
        },
      })
    },
  ],
}
