import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Flex, Box, Heading, Text, Stack } from "@chakra-ui/core";
import { Layout } from "../components/Layout";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  return (
    <Layout showBack={false}>
      <Flex
        backgroundColor="#c6f5f4"
        w="100%"
        px={10}
        py={5}
        cursor="pointer"
        onClick={() => history.push("/signup")}
      >
        <Stack mr={5}>
          <Box backgroundColor="primary.800" p={5} borderRadius={45}>
            <FaUserAlt size={50} style={{ color: "white" }} />
          </Box>
        </Stack>
        <Stack justifyContent="center">
          <Stack>
            <Heading
              size="lg"
              pb={0}
              color="primary.800"
              style={{ marginBottom: 0 }}
            >
              ACCOUNT
            </Heading>
            <Text fontSize="xs" textAlign="left" color="primary.800">
              LOGIN / SIGNUP
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Layout>
  );
};
