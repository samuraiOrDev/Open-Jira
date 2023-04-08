/* Next */
import type { AppProps } from 'next/app'
/* Terceros */
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
/* Roboto Font */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/* Owner */
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const basicTheme = createTheme({
    palette: {
      mode: 'dark',
    }
  });
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
