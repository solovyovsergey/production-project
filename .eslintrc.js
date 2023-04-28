module.exports = {
  env: {
    // предоставляет глобальные переменные браузера
    browser: true,

    // предоставляет глобальные переменные es2021
    // и автоматом выставляет ecmaVersion: 12
    es2021: true,
  },

  // синтаксический анализатор. по умолчанию Espree(парсит только js). Нам же нужно парсить ts.
  parser: '@typescript-eslint/parser',
  extends: [
    // заметил, что обычно сначала идет react/recommended, а уже потом сторонние линтеры
    'plugin:react/recommended',
    'airbnb',
  ],

  // TODO не понятно, как работают и на что влияют.
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    // прочитать
    ecmaFeatures: {
      // включает jsx, но не ясно, для чего, вроде и без него работает
      // возможно реализован в коком-то extends
      jsx: true,
    },

    // определяет версию es синтаксиса, которую мы хотим использовать
    // но скорее всего у es2021 есть приоритет над этой опцией
    ecmaVersion: 'latest',

    // под дефолту "script", но мы используем модули для импортов и экспортов
    sourceType: 'module',
  },
  rules: {
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    // error: already declared in the upper scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',

    // иначе enum ключи распознаются как неиспользуемые переменные
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    // расширение не нужно, так как настроен webpack и resolve
    'import/extensions': 'off',

    // ругается на ипорт webpack. уточнить
    'import/no-extraneous-dependencies': 'off',
  },

  // так как eslint не видит глобальную переменную __IS_DEV__
  // TODO почитать про это
  globals: {
    __IS_DEV__: true,
  },
};
