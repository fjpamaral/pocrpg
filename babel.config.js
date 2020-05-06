module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    ['transform-inline-environment-variables'],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.json', '.svg'],
      },
    ],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js', '.native.js'],
      },
    ],
  ],
};
