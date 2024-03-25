module.exports = {
  extends: ['@it-incubator/eslint-config', 'plugin:storybook/recommended'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'import/export': 0,
        'no-console': 'off',
        'react-hooks/rules-of-hooks': 'off'
      },
    },
  ],
}