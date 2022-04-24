// import * as React from 'react';
import { ThemeProvider } from 'next-themes';
// import { useReduceMotion } from 'react-reduce-motion';
// import { Globals } from 'react-spring';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Currently doesn't work with server rendering:
  // ReferenceError: window is not defined
  // react: v18.0.0
  // react-reduce-motion: v2.0.2

  // const prefersReducedMotion = useReduceMotion();

  // React.useEffect(() => {
  //   Globals.assign({
  //     skipAnimation: prefersReducedMotion,
  //   });
  // }, [prefersReducedMotion]);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
