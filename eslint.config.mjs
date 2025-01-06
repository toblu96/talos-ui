import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    ignores: ['/server/talos'],
    rules: {
      'no-console': 'off', // allow console.log in TypeScript files
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
)
