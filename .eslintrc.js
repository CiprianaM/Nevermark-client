module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/extensions': ['.js', '.tsx', '.jsx', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        'extensions': ['.js', '.tsx', '.jsx', '.ts'],
      }
    }
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "key-spacing": ["error", {"beforeColon": true, "beforeColon": true}],
    "semi-spacing": ["error", {"before": false, "after": false}],
    "no-use-before-define":["error", { "functions": false,"variables": false }],
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1,"maxBOF":0 }],
    "no-extra-parens": "error",
    "no-multi-spaces": "error",
    "space-before-blocks": "error",
     "space-before-function-paren": "error",
     "space-in-parens": ["error", "never"],
     "space-infix-ops" : "error",
     "spaced-comment" : ["error", "always"],
     "comma-spacing": ["error", { "before": false, "after": false }],
     "brace-style": "error",
     "computed-property-spacing": [ "error", "never"],
     "keyword-spacing": "error",
    "linebreak-style": "error",
    "semi": "error"
  },
}