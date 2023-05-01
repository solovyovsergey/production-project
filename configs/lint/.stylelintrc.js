module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    // TODO привести классы к единому стилю и добавить это правило.
    // 'selector-class-pattern': '^[a-z]+[A-Za-z]+$'
    'selector-class-pattern': null,
    indentation: 2,
    'string-quotes': 'single',
  },
  ignoreFiles: [
    '../../{dist,node_modules}/**/*.*',
  ],
};
