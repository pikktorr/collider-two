import '../styles/dist.css';
import type { AppProps } from 'next/app';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from '@mui/material/styles';
import { Analytics } from '@vercel/analytics/react';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
