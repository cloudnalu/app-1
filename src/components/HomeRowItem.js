import React from "react";
import { Box, Heading, Text, Stack, Button } from "@chakra-ui/core";
import PropTypes from "prop-types";

export const HomeRowItem = ({
  backgroundColor,
  onClick,
  icon,
  heading,
  subheading,
  disabled,
}) => (
  <Button
    backgroundColor={backgroundColor}
    w="100%"
    px={10}
    py={8}
    onClick={onClick}
    display="flex"
    height="unset"
    justifyContent="flex-start"
    borderRadius={0}
    isDisabled={disabled}
  >
    <Stack mr={5}>
      <Box backgroundColor="primary.800" p={5} borderRadius={45}>
        {icon}
      </Box>
    </Stack>
    <Stack justifyContent="center">
      <Stack ml={2}>
        <Heading
          size="lg"
          pb={0}
          color="primary.800"
          style={{ marginBottom: 0 }}
          textAlign="left"
          whiteSpace="normal"
        >
          {heading}
        </Heading>
        <Text fontSize="xs" textAlign="left" color="primary.800">
          {subheading}
        </Text>
      </Stack>
    </Stack>
  </Button>
);

HomeRowItem.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  disabled: PropTypes.bool,
};
