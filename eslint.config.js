import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  formatters: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
  }
})
