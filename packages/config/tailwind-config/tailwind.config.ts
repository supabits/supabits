import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Config = {
  content: [
    '../../packages/**/src/**/*.tsx',
    '../../apps/**/*.tsx',
    '!../../packages/**/node_modules',
    '!../../apps/**/node_modules',
  ],
  theme: {},
  plugins: [],
};
export default config;
