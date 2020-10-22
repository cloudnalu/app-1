import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Flex, Box, Heading, Text, Stack, Button } from "@chakra-ui/core";
import { Layout } from "../components/Layout";
import { useHistory } from "react-router-dom";
import { logout } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
export const Home = () => {
  const history = useHistory();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Layout showBack={false}>
      {user && (
        <div>
          Hi, {user.phoneNumber}!
          <Button onClick={() => dispatch(logout())}>Logout</Button>
        </div>
      )}
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
