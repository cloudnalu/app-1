import React from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Button,
  Icon,
  Tooltip,
} from "@chakra-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { BsGridFill } from "react-icons/bs";
import PropTypes from "prop-types";

export const Layout = ({
  children,
  title,
  showBack = true,
  backgroundColor = "primary.800",
}) => {
  const history = useHistory();
  const location = useLocation();
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
            <Tooltip label="Back" placement="bottom" bg="primary.600">
              <Button variant="link" onClick={() => history.goBack()}>
                <Icon name="arrow-back" color="white" size={8} />
              </Button>
            </Tooltip>
          )}
        </Box>

        <Box flexGrow={1}>
          <Heading size="sm" color="white">
            {title}
          </Heading>
        </Box>

        <Box w={20}>
          {location.pathname !== "/" && (
            <Tooltip label="Return Home" placement="bottom" bg="primary.600">
              <Button variant="link" onClick={() => history.push("/")}>
                <BsGridFill color="white" size="1.75em" />
              </Button>
            </Tooltip>
          )}
        </Box>
      </Stack>
      <Flex direction="column" flexGrow={1} overflowY="scroll">
        {children}
      </Flex>
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  showBack: PropTypes.bool,
  backgroundColor: PropTypes.string,
};
