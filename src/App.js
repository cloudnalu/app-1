import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Box, Flex, Image } from "@chakra-ui/core";
import "./App.css";
import customTheme from "./theme";
import cloudNaluLogo from "./assets/cloudNaluLogo.png";
import { Router } from "./Router";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <div className="App">
        <Flex
          direction="row"
          alignItems="center"
          px={[0, "5vh"]}
          justifyContent="flex-end"
          minH="100vh"
          backgroundColor="primary.50"
        >
          <Flex
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={cloudNaluLogo} alt="Cloud Nalu Logo" maxH={300} />
          </Flex>
          <Box
            backgroundColor="white"
            height={["100vh", "90vh"]}
            minWidth={["100vw", 400]}
            borderRadius={[0, 40]}
          >
            <Router />
          </Box>
        </Flex>
      </div>
    </ThemeProvider>
  );
}

export default App;
