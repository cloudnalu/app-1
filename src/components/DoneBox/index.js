import React from "react";
import "./done.css";
import { Stack } from "@chakra-ui/core";

export const DoneBox = ({ children }) => {
  return (
    <Stack
      className="done-box"
      w="100%"
      h={500}
      borderRadius={5}
      alignItems="center"
      justifyContent="space-around"
      pt={100}
      mb={10}
    >
      {children}
    </Stack>
  );
};
