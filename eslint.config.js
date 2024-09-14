import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    rules: {
      curly: ['error', 'multi-line'],
    },
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
    vue: {
      overrides: {
        'vue/operator-linebreak': ['error', 'before'],
        'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
        'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }],
      },
    },
    // javascript: {
    //   overrides: {
    //     curly: ['error', 'multi-line'],
    //   },
    // },
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  },
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/migration-from-tailwind-2': 'off',
    },
  }),
)
