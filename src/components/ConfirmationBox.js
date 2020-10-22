import React from "react";
import { Stack, Heading, Text, Button, Flex } from "@chakra-ui/core";

export const ConfirmationBox = ({ heading, lines, onGoBack, onConfirm }) => {
  return (
    <Stack
      backgroundColor="primary.100"
      width="80%"
      alignItems="center"
      px={5}
      pb={5}
      borderRadius={5}
    >
      <Heading size="sm" mt={5} color="primary.800">
        {heading}
      </Heading>
      {lines.map((l) => (
        <Text key={l}>{l}</Text>
      ))}
      <Stack isInline>
        <Button color="primary.800" mt={5} onClick={() => onGoBack()}>
          GO BACK
        </Button>
        <Button
          variantColor="primary"
          mt={5}
          backgroundColor="primary.800"
          onClick={() => onConfirm()}
        >
          CONFIRM
        </Button>
      </Stack>
    </Stack>
  );
};
