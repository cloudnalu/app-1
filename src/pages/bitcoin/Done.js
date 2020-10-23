import React, { useContext } from "react";
import { Layout } from "../../components/Layout";
import { useHistory } from "react-router-dom";
import { Flex, Heading, Text, Stack, Icon, Button } from "@chakra-ui/core";
import { DoneBox } from "../../components/DoneBox";
import BitcoinContext from "./BitcoinContext";

export const Done = () => {
  const history = useHistory();
  const { amountBTC, amountUSD } = useContext(BitcoinContext);

  return (
    <Layout title="BUY BITCOIN">
      <Stack
        backgroundColor="white"
        flexGrow={1}
        justifyContent="flex-start"
        alignItems="center"
        px={10}
        pt={10}
      >
        <DoneBox>
          <Heading color="primary.800">${amountUSD}</Heading>
          <Text fontWeight="bold" color="primary.800">
            You have bought {amountBTC} BTC for ${amountUSD} USD
          </Text>
          <Text color="primary.800" maxWidth="80%">
            Average transaction time: 60m
          </Text>
          <Text color="primary.800" maxWidth="80%">
            You will be notified when the transaction is complete.
          </Text>
          <Flex
            backgroundColor="primary.50"
            w="64px"
            h="64px"
            borderRadius={32}
            justifyContent="center"
            alignItems="center"
          >
            <Icon name="check" color="primary.800" size={6} />
          </Flex>
        </DoneBox>
        <Button
          variantColor="primary"
          mt={5}
          onClick={() => history.push("/")}
          backgroundColor="primary.800"
        >
          RETURN HOME
        </Button>
      </Stack>
    </Layout>
  );
};
