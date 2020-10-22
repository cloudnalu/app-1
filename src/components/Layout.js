import React from "react";
import { Box, Flex, Stack, Heading, Button, Icon } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

export const Layout = ({
  children,
  title,
  showBack = true,
  backgroundColor = "primary.800",
}) => {
  const history = useHistory();
  return (
    <Flex
      backgroundColor={backgroundColor}
      h="100%"
      w="100%"
      style={{ marginBottom: 0 }}
      flexDir="column"
    >
      <Stack
        height="3em"
        mt="1em"
        isInline
        alignItems="center"
        justifyContent="center"
      >
        <Box w={20}>
          {history.length > 0 && showBack && (
            <Button variant="link" onClick={() => history.goBack()}>
              <Icon name="arrow-back" color="white" size={8} />
            </Button>
          )}
        </Box>

        <Box flexGrow={1}>
          <Heading size="sm" color="white">
            {title}
          </Heading>
        </Box>

        <Box w={20} />
      </Stack>
      <Flex direction="column" flexGrow={1} overflowY="scroll">
        {children}
      </Flex>
    </Flex>
  );
};
