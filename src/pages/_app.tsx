import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {Press_Start_2P, VT323} from 'next/font/google';
import {memo} from 'react';

const pressStart = Press_Start_2P({weight: ['400'], subsets: ['latin'], variable: '--font-pixel'});
const vt323 = VT323({weight: ['400'], subsets: ['latin'], variable: '--font-retro'});

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <main className={`${vt323.className} ${pressStart.variable}`}>
      <Component {...pageProps} />
    </main>
  );
});

export default MyApp;
