import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiDollar, BiShuffle, BiPlus } from "react-icons/bi";
import { Flex, Box, Heading, Text, Stack } from "@chakra-ui/core";
import { Layout } from "../components/Layout";
import { useHistory } from "react-router-dom";
import { logout } from "../store/user";
import { useDispatch, useSelector } from "react-redux";

const HomeRowItem = ({
  backgroundColor,
  onClick,
  icon,
  heading,
  subheading,
}) => (
  <Flex
    backgroundColor={backgroundColor}
    w="100%"
    px={10}
    py={10}
    cursor="pointer"
    onClick={onClick}
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
        >
          {heading}
        </Heading>
        <Text fontSize="xs" textAlign="left" color="primary.800">
          {subheading}
        </Text>
      </Stack>
    </Stack>
  </Flex>
);

export const Home = () => {
  const history = useHistory();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Layout showBack={false}>
      {user ? (
        <HomeRowItem
          backgroundColor="#c6f5f4"
          onClick={() => dispatch(logout())}
          icon={<FaUserAlt size={50} style={{ color: "white" }} />}
          heading={user.phoneNumber}
          subheading="LOGOUT"
        />
      ) : (
        <HomeRowItem
          backgroundColor="#c6f5f4"
          onClick={() => history.push("/signup")}
          icon={<FaUserAlt size={50} style={{ color: "white" }} />}
          heading="ACCOUNT"
          subheading="LOGIN / SIGNUP"
        />
      )}
      {user && (
        <>
          <HomeRowItem
            backgroundColor="#00bab9"
            onClick={() => console.log("hi")}
            icon={<BiDollar size={50} style={{ color: "white" }} />}
            heading="USD BALANCE"
            subheading="DEPOSITS / WITHDRAWALS"
          />
          <HomeRowItem
            backgroundColor="#00a6ba"
            onClick={() => console.log("hi")}
            icon={<BiShuffle size={50} style={{ color: "white" }} />}
            heading="BITCOIN"
            subheading="BUY / SELL"
          />
          <HomeRowItem
            backgroundColor="#f4d8ca"
            onClick={() => console.log("hi")}
            icon={<BiPlus size={50} style={{ color: "white" }} />}
            heading="SERVICES"
            subheading="BANKING, CUSTODY & MORE"
          />
        </>
      )}
    </Layout>
  );
};
