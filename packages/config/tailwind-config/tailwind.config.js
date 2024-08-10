/** @typedef {import("tailwindcss").Config} Config */

/** @type Config */
module.exports = {
  content: [
    '../../packages/**/src/**/*.tsx',
    '../../apps/**/*.tsx',
    '!../../packages/**/node_modules',
    '!../../apps/**/node_modules',
  ],
  theme: {},
  plugins: [],
};
