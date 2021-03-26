import React from "react";
import { NativeBaseProvider, Center } from "native-base";
import { Window, Header, Desc } from './components';
import { theme } from "./theme/portfolio-terminal-theme";
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1}>
        <Window>
          <Header />
          <Desc />
        </Window>
      </Center>
    </NativeBaseProvider>
  );
}
