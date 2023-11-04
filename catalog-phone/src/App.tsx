import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
  ColorModeScript,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Header from "./Components/Header";
import ListaProdutos from "./Components/ListaProduto";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ColorModeSwitcher />
    <Header />

    <Box textAlign="center" fontSize="xl">
      <ListaProdutos />
    </Box>
  </ChakraProvider>
);
