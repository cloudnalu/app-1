import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Box, Flex, Image } from "@chakra-ui/core";
import "./App.css";
import customTheme from "./theme";
import cloudNaluLogo from "./assets/cloudNaluLogo.png";
import { Router } from "./Router";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={customTheme}>
          <CSSReset />
          <div className="App">
            <Flex
              direction="row"
              alignItems="center"
              px={[0, "5vh"]}
              justifyContent="flex-end"
              minH={["-webkit-fill-available", "100vh"]}
              backgroundColor="primary.50"
            >
              <Flex
                flexGrow={1}
                direction="row"
                alignItems="center"
                justifyContent="center"
                display={["none", "none", "flex"]}
              >
                <Image src={cloudNaluLogo} alt="Cloud Nalu Logo" maxH={300} />
              </Flex>
              <Box
                backgroundColor="white"
                height={["-webkit-fill-available", "90vh"]}
                width={["100vw", 400]}
                borderRadius={[0, 40]}
                overflow="auto"
                borderColor="primary.800"
                borderStyle="solid"
                borderWidth={[0, 1]}
                boxShadow={["none", "0px 0px 10px -2px rgba(2,85,85,1);"]}
              >
                <Router />
              </Box>
            </Flex>
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
