import React, { useState, useContext } from "react";
import { Layout } from "../../components/Layout";
import {
  Stack,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Icon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "../../components/DatePicker";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "../../components/Dropdown/dropdown.css";
import { isEmail } from "validator";
import SignUpContext from "./SignUpContext";

export const Step1 = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    errors,
    control,
    getValues,
  } = useForm();

  const { setSignUpData, signUpData } = useContext(SignUpContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(
    false
  );

  const country = watch("country", "");

  const onSubmit = (data) => {
    setSignUpData((d) => ({ ...d, ...data }));
    history.push("/signup/2");
  };

  return (
    <Layout title="SIGN UP">
      <Stack backgroundColor="white" flexGrow={1} pt={30} px={10} pb={5}>
        <Heading color="primary.800">step 1/3</Heading>
        <Text fontSize="xl" color="primary.800">
          Tell us more info about yourself
        </Text>
        <p>{JSON.stringify(signUpData)}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack pt={5} pb={30}>
            <FormControl>
              <Stack isInline>
                <FormLabel htmlFor="name" fontSize="sm" color="primary.800">
                  Full Name
                </FormLabel>
              </Stack>

              <Input
                name="name"
                type="text"
                ref={register({ required: true })}
                placeholder="name"
                variant="filled"
                focusBorderColor="primary.800"
                variantColor="primary"
                isInvalid={!!errors.name}
              />
              <FormHelperText>
                {errors.name && (
                  <Text color="red.500">This field is required</Text>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl>
              <Stack isInline>
                <FormLabel htmlFor="email" fontSize="sm" color="primary.800">
                  Email
                </FormLabel>
              </Stack>

              <Input
                name="email"
                type="email"
                ref={register({
                  required: true,
                  validate: (input) =>
                    isEmail(input) || <span>Email is invalid</span>,
                })}
                placeholder="email"
                variant="filled"
                focusBorderColor="primary.800"
                variantColor="primary"
                isInvalid={!!errors.email}
              />
              <FormHelperText>
                {errors.email && (
                  <Text color="red.500">This field is required</Text>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl>
              <Stack isInline>
                <FormLabel htmlFor="SSN" fontSize="sm" color="primary.800">
                  SSN
                </FormLabel>
              </Stack>

              <Input
                name="SSN"
                type="string"
                ref={register({ required: true })}
                placeholder="SSN"
                variant="filled"
                focusBorderColor="primary.800"
                variantColor="primary"
                isInvalid={!!errors.SSN}
              />
              <FormHelperText>
                {errors.SSN && (
                  <Text color="red.500">This field is required</Text>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl>
              <Stack isInline>
                <FormLabel htmlFor="DOB" fontSize="sm" color="primary.800">
                  Date of Birth
                </FormLabel>
              </Stack>

              <Controller
                name="DOB"
                control={control}
                rules={{ required: true }}
                render={(props) => (
                  <DatePicker
                    selectedDate={props.value}
                    handleChange={(d) => props.onChange(d)}
                  />
                )}
              />

              <FormHelperText>
                {errors.DOB && (
                  <Text color="red.500">This field is required</Text>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl>
              <Stack isInline>
                <FormLabel htmlFor="country" fontSize="sm" color="primary.800">
                  Country
                </FormLabel>
              </Stack>

              <Controller
                name="country"
                control={control}
                rules={{ required: true }}
                render={(props) => (
                  <div style={{ display: "flex" }}>
                    <CountryDropdown
                      classes="chakra-dropdown"
                      value={props.value}
                      onChange={(c) => props.onChange(c)}
                    />
                    <Icon
                      name="chevron-down"
                      size={5}
                      style={{ position: "relative", left: -30, top: 10 }}
                    />
                  </div>
                )}
              />

              <FormHelperText>
                {errors.country && (
                  <Text color="red.500">This field is required</Text>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl>
              <Stack isInline>
                <FormLabel htmlFor="region" fontSize="sm" color="primary.800">
                  Region
                </FormLabel>
              </Stack>

              <Controller
                name="region"
                control={control}
                rules={{ required: true }}
                render={(props) => (
                  <div style={{ display: "flex", width: "106%" }}>
                    <RegionDropdown
                      classes="chakra-dropdown"
                      country={country}
                      value={props.value}
                      onChange={(val) => props.onChange(val)}
                    />
                    <Icon
                      name="chevron-down"
                      size={5}
                      style={{ position: "relative", left: -30, top: 10 }}
                    />
                  </div>
                )}
              />

              <FormHelperText>
                {errors.region && (
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

            <FormControl>
              <Stack isInline>
                <FormLabel
                  htmlFor="confirmPassword"
                  fontSize="sm"
                  color="primary.800"
                >
                  Confirm Password
                </FormLabel>
              </Stack>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showConfirmationPassword ? "text" : "password"}
                  placeholder="confirm password"
                  name="confirmPassword"
                  ref={register({
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: (value) =>
                      // value is from confirm and watch will return value from password
                      value === getValues("password") || (
                        <span>Password fields don't match</span>
                      ),
                  })}
                  variant="filled"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowConfirmationPassword((v) => !v)}
                    variantColor="primary"
                    backgroundColor="primary.800"
                  >
                    {showConfirmationPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <FormHelperText>
                {errors.confirmPassword && (
                  <Text color="red.500">{errors.confirmPassword.message}</Text>
                )}
              </FormHelperText>
            </FormControl>

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
      </Stack>
    </Layout>
  );
};
