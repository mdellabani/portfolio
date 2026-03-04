// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        retro: {
          base: '#f5f0e6',
          surface: '#ebe6d8',
          border: '#c9c4b2',
          text: '#1a1a1a',
          muted: '#555555',
          green: '#1a7a3a',
          amber: '#b8860b',
          cyan: '#1a8a8a',
        },
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', 'Press Start 2P', 'monospace'],
      },
      keyframes: {
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
