// Arquivo responsável por definir para o Chakra quais são as cores, fontes e outros aspectos
// usados na aplicação

import { extendTheme, Theme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
  colors: {
    gray: {
      "50": "#EEEEF2",
      "100": "#D1D2DC",
      "200": "#B3B5C6",
      "300": "#9699B0",
      "400": "#797D9A",
      "500": "#616480",
      "600": "#4B4D63",
      "700": "#353646",
      "800": "#1F2029",
      "900": "#181B23",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  }
} as Theme | {});

export default theme;