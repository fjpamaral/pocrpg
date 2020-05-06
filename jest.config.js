module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['jest-expect-message'],
  clearMocks: false,
  coverageDirectory: './coverage',
  coverageReporters: ['lcov'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/android/**',
    '!**/coverage/**',
    '!**/ios/**',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
  moduleDirectories: ['node_modules'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  verbose: false,
  automock: false,
};
