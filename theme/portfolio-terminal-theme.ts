import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    green: {
      50: "#edffdf",
      100: "#d2f9b5",
      200: "#b7f489",
      300: "#9bef5c",
      400: "#7fea2e",
      500: "#66d115",
      600: "#4ea20d",
      700: "#377406",
      800: "#1f4701",
      900: "#051800",
    },
  },
  config: {
    initialColorMode: "dark",
  },
  components: {
    Text: {
      defaultProps: {
        color: "green.500",
      },
      baseStyle: {
        color: "green.500",
        fontSize: "md",
      },
    },
    Heading: {
      baseStyle: {
        color: "green.500",
      },
    },
    Icon: {
      baseStyle: {
          size:28,
        color: "green.500",
      },
    },
  },
});
