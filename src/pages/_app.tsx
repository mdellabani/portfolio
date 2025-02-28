import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {Chakra_Petch} from "next/font/google";
import {memo} from 'react';

const chakraPetch = Chakra_Petch({weight: ["400", "700"], subsets: ["latin"]});
const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
        <main className={chakraPetch.className}>

      <Component {...pageProps} />
        </main>
  );
});

export default MyApp;
