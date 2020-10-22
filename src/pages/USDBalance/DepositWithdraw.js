import React, { useState, useContext } from "react";
import { Layout } from "../../components/Layout";
import {
  Stack,
  Button,
  Heading,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Text,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isCurrency } from "validator";
import USDContext from "./USDContext";

// TODO: pull these accounts from somehwere
const bankAccounts = [
  { value: "1234", text: "BANK ACCOUNT *1234" },
  { value: "5678", text: "BANK ACCOUNT *5678" },
];

const cloudNaluAccounts = [
  { value: "1", text: "USD ACCOUNT 1" },
  { value: "2", text: "USD ACCOUNT 2" },
];

export const DepositWithdraw = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const { setFormData, setTransactionType } = useContext(USDContext);

  const onSubmit = (data) => {
    setFormData(data);
    setTransactionType(tabIndex === 0 ? "deposit" : "withdrawal");
    history.push("/usd/confirm");
  };

  const [tabIndex, setTabIndex] = useState(0);

  const Form = ({ type }) => (
    <>
      <FormControl>
        <Stack isInline>
          <FormLabel htmlFor="amount" fontSize="sm" color="primary.800">
            Send
          </FormLabel>
        </Stack>
        <InputGroup>
          <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
          <Input
            placeholder="enter amount"
            name="amount"
            ref={register({
              required: "This field is required",
              validate: (value) =>
                isCurrency(value) || <span>Amount is not valid</span>,
            })}
            focusBorderColor="primary.800"
          />
          <InputRightElement
            children={
              <Text color="gray.400" mr={2}>
                USD
              </Text>
            }
          />
        </InputGroup>
        <FormHelperText>
          {errors.amount && (
            <Text color="red.500">{errors.amount.message}</Text>
          )}
        </FormHelperText>
      </FormControl>

      <FormControl>
        <Stack isInline>
          <FormLabel htmlFor="from" fontSize="sm" color="primary.800">
            From
          </FormLabel>
        </Stack>

        <Select
          placeholder="select option"
          ref={register({ required: "This field is required" })}
          name="from"
          focusBorderColor="primary.800"
          variant="filled"
        >
          {(type === "deposit" ? bankAccounts : cloudNaluAccounts).map(
            ({ value, text }) => (
              <option value={value} key={value}>
                {text}
              </option>
            )
          )}
        </Select>

        <FormHelperText>
          {errors.from && <Text color="red.500">{errors.from.message}</Text>}
        </FormHelperText>
      </FormControl>

      <FormControl>
        <Stack isInline>
          <FormLabel htmlFor="to" fontSize="sm" color="primary.800">
            To
          </FormLabel>
        </Stack>

        <Select
          placeholder="select option"
          ref={register({ required: "This field is required" })}
          name="to"
          focusBorderColor="primary.800"
          variant="filled"
        >
          {(type === "deposit" ? cloudNaluAccounts : bankAccounts).map(
            ({ value, text }) => (
              <option value={value} key={value}>
                {text}
              </option>
            )
          )}
        </Select>

        <FormHelperText>
          {errors.to && <Text color="red.500">{errors.to.message}</Text>}
        </FormHelperText>
      </FormControl>
    </>
  );

  return (
    <Layout title="DEPOSIT / WITHDRAW USD">
      <Stack backgroundColor="white" flexGrow={1} pt={30} px={10} pb={5}>
        <Tabs
          isFitted
          variantColor="primary"
          onChange={(index) => setTabIndex(index)}
        >
          <TabList mb="1em">
            <Tab>DEPOSIT</Tab>
            <Tab>WITHDRAW</Tab>
          </TabList>
        </Tabs>
        <Form type={tabIndex === 0 ? "deposit" : "withdrawal"} />
      </Stack>
      <Button
        variantColor="primary"
        height="4em"
        justifyContent="center"
        onClick={handleSubmit(onSubmit)}
        borderRadius={0}
        width="100%"
        backgroundColor="primary.800"
      >
        <Heading size="sm">CONTINUE</Heading>
      </Button>
    </Layout>
  );
};
