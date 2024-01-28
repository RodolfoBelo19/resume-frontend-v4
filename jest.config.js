module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/styleMock.js",
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  maxWorkers: 2,
};