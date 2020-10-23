import React from "react";
import "./done.css";
import { Stack } from "@chakra-ui/core";
import PropTypes from "prop-types";

/**
 * Custom Done Box with CSS gradient from ./done.css
 */
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

DoneBox.propTypes = {
  children: PropTypes.node,
};
