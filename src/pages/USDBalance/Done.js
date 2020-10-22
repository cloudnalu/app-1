import React, { useContext } from "react";
import { Layout } from "../../components/Layout";
import USDContext from "./USDContext";
import { useHistory } from "react-router-dom";
import { Flex, Heading, Text, Stack, Icon, Box, Button } from "@chakra-ui/core";
import "./done.css";

export const Done = () => {
  const { formData, transactionType, error } = useContext(USDContext);
  const history = useHistory();

  return (
    <Layout title={`${transactionType} USD`.toUpperCase()}>
      <Stack
        backgroundColor="white"
        flexGrow={1}
        justifyContent="flex-start"
        alignItems="center"
        px={10}
        pt={10}
      >
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
          <Heading color="primary.800">${formData.amount}</Heading>
          <Text fontWeight="bold" color="primary.800">
            You have sent ${formData.amount} USD
          </Text>
          <Text color="primary.800" maxWidth="60%">
            Transfers take 1-2 days. You will be notified when the transfer is
            complete.
          </Text>
          <Flex
            backgroundColor="primary.50"
            w="64px"
            h="64px"
            borderRadius={32}
            justifyContent="center"
            alignItems="center"
            s
          >
            <Icon name="check" color="primary.800" size={6} />
          </Flex>
        </Stack>
        <Button variantColor="primary" mt={5} onClick={() => history.push("/")}>
          VIEW TRANSACTIONS
        </Button>
        <Button
          variantColor="primary"
          mt={5}
          onClick={() => history.push("/")}
          backgroundColor="primary.800"
        >
          GO TO HOME
        </Button>
      </Stack>
    </Layout>
  );
};
