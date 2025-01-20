module.exports = {
  preset: 'react-native',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{js,ts}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/components/utils/utils.ts',
    '<rootDir>/src/services/services.ts',
    '<rootDir>/src/hooks/useCartPetitions.tsx',
    '<rootDir>/src/hooks/useGetColombianInfo.tsx',
    '<rootDir>/src/hooks/useLinkTo.tsx',
  ],
  coverageDirectory: './coverage',
  testPathIgnorePatterns: ['/android/', '/ios/'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-redux|@react-native|react-native|redux)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {},
};
