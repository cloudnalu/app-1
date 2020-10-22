import React from "react";
import { Layout } from "../../components/Layout";
import { Stack, Heading, Text, Button, Box } from "@chakra-ui/core";
import { ReactComponent as PlaidLogo } from "../../assets/plaidLogo.svg";
import { useHistory } from "react-router-dom";

export const Step3 = () => {
  const history = useHistory();
  return (
    <Layout title="SIGN UP">
      <Stack
        backgroundColor="white"
        flexGrow={1}
        pt={30}
        px={10}
        pb={5}
        alignItems="center"
      >
        <Heading color="primary.800">step 3/3</Heading>
        <Text fontSize="xl" color="primary.800">
          Link your bank account securely with Plaid for instant verification
        </Text>

        <Stack
          backgroundColor="primary.100"
          width="100%"
          alignItems="center"
          px={5}
          pb={5}
          borderRadius={5}
          mt={10}
        >
          <Box my={5}>
            <PlaidLogo />
          </Box>
          <Text mt={5}>
            Login to your bank account securely with Plaid for instant
            verification
          </Text>
          <Button
            variantColor="primary"
            mt={5}
            backgroundColor="primary.800"
            onClick={() => history.push("/")}
          >
            OK, CONTINUE
          </Button>
        </Stack>
        <Button
          variantColor="primary"
          mt={10}
          backgroundColor="primary.800"
          onClick={() => history.push("/")}
        >
          ENTER ACCOUNT/ROUTING INSTEAD
        </Button>
      </Stack>
    </Layout>
  );
};
