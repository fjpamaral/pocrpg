module.exports = {
  parser: "babel-eslint",
  globals: {
    alert: true,
    __DEV__: true,
    navigator: true,
    test: true,
    expect: true,
    jest: true,
    fetch: true,
    Headers: true
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
      classes: true
    }
  },
  plugins: ["import", "jest", "jsx-a11y", "prettier", "react-native", "react-hooks"],
  extends: ["airbnb", "eslint:recommended", "plugin:jest/recommended", "plugin:prettier/recommended", "plugin:react/recommended", "prettier", "prettier/react"],
  env: {
    jest: true
  },
  rules: {
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "warn",
    "no-irregular-whitespace": "off",
    "import/no-relative-parent-imports": "error",
    "no-trailing-spaces": "error",
    "react/jsx-one-expression-per-line": "off",
    "import/no-cycle": "off",
    semi: "error",
    "comma-dangle": ["error"],
    "no-console": "off",
    "prefer-const": "error",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "react/display-name": 0,
    "react/no-string-refs": 0,
    indent: "off",
    "react/no-unescaped-entities": "off"
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        root: ["./app"]
      }
    }
  }
}
