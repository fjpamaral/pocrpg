module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['jest-expect-message'],
  clearMocks: false,
  coverageDirectory: './coverage',
  coverageReporters: ['lcov'],
  collectCoverageFrom: [
    'src/**/*.js',
    'app/**/**/*.js',
    '!app/**/**/*.spec.js',
    '!src/**/**/*.test.js',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
  moduleDirectories: ['node_modules'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  verbose: false,
  automock: false,
};
