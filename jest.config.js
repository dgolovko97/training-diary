module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^shared/(.*)$': '<rootDir>/src/shared/$1',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
}
