import React, { useContext } from "react";
import { Layout } from "../../../components/Layout";
import { Heading, Stack, Text, Button, Input } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SignUpContext from "./SignUpContext";
import { FixedBottom } from "react-fixed-bottom";
import { isMobileOnly } from "react-device-detect";

export const SignUp = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const { setSignUpData } = useContext(SignUpContext);

  const onSubmit = (data) => {
    setSignUpData(data);
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
          verify your account to get started.
        </Text>
        <Text fontSize="xl" color="primary.800" pt={5}>
          What is your phone number?
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack pt={5}>
            <Input
              name="phoneNumber"
              type="tel"
              ref={register({ required: true })}
              placeholder="phone number"
              variant="filled"
              focusBorderColor="primary.800"
              variantColor="primary"
              isInvalid={!!errors.phoneNumber}
            />

            {errors.phoneNumber && (
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
        {!isMobileOnly && (
          <Stack flexGrow={1} justifyContent="flex-end">
            <Text fontSize="sm" color="primary.800">
              Already have an account?
            </Text>
          </Stack>
        )}
      </Stack>
      {isMobileOnly ? (
        <FixedBottom>
          <Button
            variantColor="primary"
            height="4em"
            justifyContent="center"
            onClick={() => history.push("/login")}
            borderRadius={0}
            width="100%"
          >
            <Heading size="sm" color="primary.800">
              LOGIN
            </Heading>
          </Button>
        </FixedBottom>
      ) : (
        <Button
          variantColor="primary"
          height="4em"
          justifyContent="center"
          onClick={() => history.push("/login")}
          borderRadius={0}
          width="100%"
        >
          <Heading size="sm" color="primary.800">
            LOGIN
          </Heading>
        </Button>
      )}
    </Layout>
  );
};
