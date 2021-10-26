module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    // Base rules
    indentation: 2,
    'number-leading-zero': 'never',
    'string-quotes': 'single',
    'selector-max-id': 1,
    'selector-list-comma-newline-after': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment'],
        except: ['first-nested'],
      },
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] },
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-blacklist': { '/^border/': ['none'] },
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
        except: ['first-nested', 'blockless-after-same-name-blockless'],
      },
    ],

    // Sass rules
    'max-nesting-depth': null,
    'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
    'scss/at-extend-no-missing-placeholder': true,
    'order/order': [
      { type: 'at-rule' },
      'declarations',
      {
        type: 'at-rule',
        hasBlock: true,
      },
      'rules',
      {
        type: 'at-rule',
        name: 'return',
      },
    ],

    // stylelint-scss
    'scss/at-else-empty-line-before': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/selector-no-redundant-nesting-selector': true,
    // stylelint-order
    'order/properties-alphabetical-order': true,
  },
  defaultSeverity: 'error',
};
