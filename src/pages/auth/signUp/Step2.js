import React, { useContext } from "react";
import { Stack, Heading, Text, Divider, Button } from "@chakra-ui/core";
import { Layout } from "../../../components/Layout";
import SignUpContext from "./SignUpContext";
import { useHistory } from "react-router-dom";

const DataItem = ({ label, data }) => (
  <>
    <Stack
      isInline
      alignItems="end"
      justifyContent="space-between"
      style={{ marginBottom: 0 }}
      mt={5}
    >
      <Text fontWeight="bold" color="primary.800" fontSize="xs">
        {label}
      </Text>
      <Text color="primary.800" fontSize="lg">
        {console.log(typeof data)}
        {data instanceof Date ? data.toLocaleDateString() : data}
      </Text>
    </Stack>
    <Divider borderColor="primary.400" borderWidth={3} />
  </>
);

export const Step2 = () => {
  const history = useHistory();
  const { signUpData, submitForVerification } = useContext(SignUpContext);

  return (
    <Layout title="SIGN UP">
      <Stack backgroundColor="white" flexGrow={1} pt={30} px={10} pb={5}>
        <Heading color="primary.800">step 2/3</Heading>
        <Text fontSize="xl" color="primary.800">
          Review and submit
        </Text>
        <Text fontSize="sm" color="primary.800">
          Avg. Wait Time = 30s
        </Text>
        <Stack>
          {/* Filter out the items in sign up data that are not required, then show them to the user*/}
          {Object.entries(signUpData)
            .filter(
              ([key]) =>
                !["phoneNumber", "password", "confirmPassword"].includes(key)
            )
            .map(([key, value]) => (
              <DataItem label={key.toUpperCase()} data={value} />
            ))}
        </Stack>
        <Button
          variantColor="primary"
          backgroundColor="primary.800"
          mt={5}
          onClick={() => {
            submitForVerification();
            history.push("/signup/verification");
          }}
        >
          SUBMIT FOR VERIFICATION
        </Button>
      </Stack>
    </Layout>
  );
};
