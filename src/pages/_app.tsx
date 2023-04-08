/* Next */
import type { AppProps } from 'next/app'
/* Terceros */

/* Roboto Font */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/* Owner */
import '@/styles/globals.css'
import { ThemesProviderColorMode } from '@/components';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesProviderColorMode>
      <Component {...pageProps} />
    </ThemesProviderColorMode>)
}
