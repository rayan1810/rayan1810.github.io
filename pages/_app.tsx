import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { theme } from "../src/theme";

type CustomThemeType = typeof theme; 

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider isSSR theme={theme}>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
