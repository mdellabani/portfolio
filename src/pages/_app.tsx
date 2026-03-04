import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {Press_Start_2P, Space_Mono} from 'next/font/google';
import {memo} from 'react';

const pressStart = Press_Start_2P({weight: ['400'], subsets: ['latin'], variable: '--font-pixel'});
const spaceMono = Space_Mono({weight: ['400', '700'], subsets: ['latin'], variable: '--font-retro'});

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <main className={`${spaceMono.className} ${pressStart.variable}`}>
      <Component {...pageProps} />
    </main>
  );
});

export default MyApp;
