import React, { useContext } from "react";
import { Flex, Heading, Text, Stack, Button, Icon } from "@chakra-ui/core";
import { Layout } from "../../components/Layout";
import SignUpContext from "./SignUpContext";
import { useHistory } from "react-router-dom";

export const Verification = () => {
  const history = useHistory();
  const { verified } = useContext(SignUpContext);

  return (
    <Layout showBack={false} backgroundColor="white">
      <Flex justifyContent="center" alignItems="center" flexGrow={1}>
        <Stack
          backgroundColor="primary.100"
          width="80%"
          alignItems="center"
          px={5}
          pb={5}
          borderRadius={5}
        >
          {verified === true && (
            <>
              <Icon size={150} name="check" color="primary.800" my={50} />
              <Heading size="sm" mt={5} color="primary.800">
                ACCOUNT VERIFIED
              </Heading>
              <Text>You may now use our services</Text>
              <Button
                variantColor="primary"
                mt={5}
                size="lg"
                backgroundColor="primary.800"
                onClick={() => history.push("/signup/3")}
              >
                CONTINUE
              </Button>
            </>
          )}
          {verified === false && (
            <>
              <Icon size={150} name="close" color="primary.800" my={50} />
              <Heading size="sm" mt={5} color="primary.800">
                FAILED TO VERIFY
              </Heading>
              <Text>Your account failed to be verified</Text>
              <Button
                variantColor="primary"
                mt={5}
                size="lg"
                backgroundColor="primary.800"
                onClick={() => history.push("/")}
              >
                RETURN HOME
              </Button>
            </>
          )}
          {verified === null && (
            <>
              <Heading size="sm" mt={5} color="primary.800">
                VERIFYING NEW USER
              </Heading>
              <Text>
                You may connect your bank account while you wait for
                verification
              </Text>
              <Button
                variantColor="primary"
                mt={5}
                size="lg"
                backgroundColor="primary.800"
                onClick={() => history.push("/signup/3")}
              >
                OK, CONNECT MY BANK
              </Button>
            </>
          )}
        </Stack>
      </Flex>
    </Layout>
  );
};
