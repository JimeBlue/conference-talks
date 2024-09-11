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
          50: '#92CCFF',
          100: '#7DC3FF',
          200: '#54B0FF',
          300: '#2C9DFF',
          400: '#038AFF',
          500: '#0074D9',
          600: '#0056A1',
          700: '#003869',
          800: '#001A31',
          900: '#000000',
          950: '#000000',
        },
        secondary: '#6B7280',
      },
      fontFamily: {
        body: [
          'Work Sans',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        headline: ['Montserrat', 'Arial', 'sans-serif'],
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
