import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import {
  Heading,
  Stack,
  Text,
  Button,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { login } from "../../store/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const LogIn = () => {
  const { register, handleSubmit, errors } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    // TODO: authorise user within the login function in ../store/users
    dispatch(login({ phoneNumber: data.phoneNumber }));
    history.push("/");
  };

  return (
    <Layout title="LOG IN">
      <Stack backgroundColor="white" flexGrow={1} pt={30} px={10} pb={5}>
        <Heading color="primary.800">Aloha</Heading>
        <Text fontSize="xl" color="primary.800">
          Log in with your account below.
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack pt={5}>
            <FormControl>
              <Stack isInline>
                <FormLabel
                  htmlFor="phoneNumber"
                  fontSize="sm"
                  color="primary.800"
                >
                  Phone Number
                </FormLabel>
              </Stack>

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
              <FormHelperText>
                {errors.phoneNumber && (
                  <Text color="red.500">This field is required</Text>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl>
              <Stack isInline>
                <FormLabel htmlFor="password" fontSize="sm" color="primary.800">
                  Password
                </FormLabel>
              </Stack>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  name="password"
                  ref={register({
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  variant="filled"
                  focusBorderColor="primary.800"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword((v) => !v)}
                    variantColor="primary"
                    backgroundColor="primary.800"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <FormHelperText>
                {errors.password && (
                  <Text color="red.500">{errors.password.message}</Text>
                )}
              </FormHelperText>
            </FormControl>

            <Button
              type="submit"
              variantColor="primary"
              backgroundColor="primary.800"
              mt={5}
            >
              LOG IN
            </Button>
          </Stack>
        </form>
      </Stack>
    </Layout>
  );
};
