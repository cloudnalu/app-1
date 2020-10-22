import React, { useContext } from "react";
import USDContext from "./USDContext";
import { Layout } from "../../components/Layout";
import { Stack, Heading, Text, Button, Flex } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

export const Confirmation = () => {
  const { formData, transactionType, onConfirm } = useContext(USDContext);
  const history = useHistory();

  return (
    <Layout title={`${transactionType} USD`.toUpperCase()}>
      <Flex
        backgroundColor="white"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          backgroundColor="primary.100"
          width="80%"
          alignItems="center"
          px={5}
          pb={5}
          borderRadius={5}
        >
          <Heading size="sm" mt={5} color="primary.800">
            SENDING ${formData?.amount} USD
          </Heading>
          <Text>From {formData?.from}</Text>
          <Text>To {formData?.to}</Text>
          <Stack isInline>
            <Button color="primary.800" mt={5} onClick={() => history.back()}>
              GO BACK
            </Button>
            <Button
              variantColor="primary"
              mt={5}
              backgroundColor="primary.800"
              onClick={() => {
                onConfirm();
                history.push("/usd/done");
              }}
            >
              CONFIRM
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Layout>
  );
};
