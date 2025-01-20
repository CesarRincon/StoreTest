module.exports = {
  preset: 'react-native',
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
    '<rootDir>/src/redux/actions.ts',
    '<rootDir>/src/redux/reducer.ts',
    '<rootDir>/src/redux/store.ts',
  ],
  coverageDirectory: './coverage',
  testPathIgnorePatterns: ['/android/', '/ios/'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-redux|@react-native|react-native|redux)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {},
};
