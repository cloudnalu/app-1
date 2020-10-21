import React from "react";
import { Layout } from "../../components/Layout";
import { Heading, Stack, Text, Button, Input } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    history.push("/signup/1");
  };

  return (
    <Layout title="SIGN UP">
      <Stack
        backgroundColor="white"
        flexGrow={1}
        pt={30}
        px={10}
        pb={5}
        minH="75vh"
      >
        <Heading color="primary.800">Aloha</Heading>
        <Text fontSize="xl" color="primary.800">
          Cloud Nalu is a bitcoin brokerage and services provider. Sign up and
          verify you account to get started.
        </Text>
        <Text fontSize="xl" color="primary.800" pt={5}>
          What is your phone number?
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack pt={5}>
            <Input
              name="example"
              type="tel"
              ref={register({ required: true })}
              placeholder="phone number"
              variant="filled"
              focusBorderColor="primary.800"
              variantColor="primary"
              isInvalid={!!errors.example}
            />

            {errors.example && (
              <Text color="red.500">This field is required</Text>
            )}

            <Button
              type="submit"
              variantColor="primary"
              backgroundColor="primary.800"
              mt={5}
            >
              CONTINUE
            </Button>
          </Stack>
        </form>
        <Stack flexGrow={1} justifyContent="flex-end">
          <Text fontSize="sm" color="primary.800">
            Already have an account?
          </Text>
        </Stack>
      </Stack>
      <Button
        variantColor="primary"
        height="4em"
        justifyContent="center"
        onClick={() => alert("open login form")}
        borderRadius={0}
        flexGrow={1}
        width="100%"
      >
        <Heading size="sm" color="primary.800">
          LOGIN
        </Heading>
      </Button>
    </Layout>
  );
};
