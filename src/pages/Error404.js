import React from "react";
import { Layout } from "../components/Layout";
import { Heading, Stack, Button } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

export const Error404 = () => {
  const history = useHistory();
  return (
    <Layout title="ERROR 404">
      <Stack
        backgroundColor="white"
        flexGrow={1}
        justifyContent="flex-start"
        alignItems="center"
        px={10}
        pt={10}
      >
        <Heading color="primary.800">Page Could Not Be Found</Heading>
        <Button
          onClick={() => history.push("/")}
          variantColor="primary"
          backgroundColor="primary.800"
          mt="20px"
        >
          RETURN HOME
        </Button>
      </Stack>
    </Layout>
  );
};
