// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        retro: {
          base: '#0a0a0a',
          surface: '#111111',
          border: '#2a2a2a',
          text: '#d0d0d0',
          muted: '#777777',
          green: '#3a9a60',
          amber: '#d4a04a',
          cyan: '#5ab8b8',
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
