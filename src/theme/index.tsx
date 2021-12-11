import { extendTheme } from "native-base";
const config = {
  useSystemColorMode: true,
//   initialColorMode: "dark",
};

export const theme = extendTheme({
   // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Architects Daughter',
    body: 'Architects Daughter',
    // mono: 'Roboto',
  },
  config,
  components: {
    Heading: {
      sizes: {
        "5xl": {
          fontSize: ["6xl", null, "9xl"],
        },
      },
    },
  },
});
