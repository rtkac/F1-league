const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '/apps/f1-league-app/src/**/*.{ts,tsx,html}'),
    join(__dirname, '/libs/shared/src/**/*.{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        black: '#0e0d0d',
        primary: '#ffa909',
        secondary: '#ef0000',
      },
    },
  },
  plugins: [],
};
