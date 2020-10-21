import React, { useState } from "react";
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
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "../../components/DatePicker";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "../../components/Dropdown/dropdown.css";

export const Step1 = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const history = useHistory();

  const country = watch("country", "");

  const onSubmit = (data) => {
    console.log(data);
    history.push("/signup/1");
  };

  return (
    <Layout title="SIGN UP">
      <Stack backgroundColor="white" flexGrow={1} pt={30} px={10} pb={5}>
        <Heading color="primary.800">step 1/3</Heading>
        <Text fontSize="xl" color="primary.800">
          Tell us more info about yourself
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack pt={5}>
            <FormControl>
              <Stack isInline>
                <FormLabel htmlFor="name" fontSize="sm" color="primary.800">
                  Name
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
                ref={register({ required: true })}
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
