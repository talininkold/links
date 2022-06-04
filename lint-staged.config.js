module.exports = {
  // eslint-disable-next-line
  '*.{ts,tsx}': [(files) => `npm run lint ${files.join(' ')}`, () => 'npm run check'],
};
