import React, { useContext, useState } from "react";
import { Layout } from "../../components/Layout";
import {
  Stack,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Box,
  Collapse,
  Flex,
  Button,
  Select,
} from "@chakra-ui/core";
import BitcoinContext from "./BitcoinContext";
import { useForm } from "react-hook-form";
import { isCurrency } from "validator";
import { useHistory } from "react-router-dom";

// TODO: pull these from API
const cloudNaluAccounts = [
  { value: "1", text: "USD ACCOUNT 1" },
  { value: "2", text: "USD ACCOUNT 2" },
];

export const Buy = () => {
  const { address, setAmountUSD, setAccount, btcPrice } = useContext(
    BitcoinContext
  );

  const [expandAddress, setExpandAddress] = useState(false);

  const { register, errors, watch, handleSubmit } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    setAmountUSD(data.amount);
    setAccount(data.account);
    history.push("/bitcoin/confirm");
  };

  return (
    <Layout title="BUY BITCOIN">
      <Stack backgroundColor="white" flexGrow={1} pt={30} px={10} pb={5}>
        <Tabs isFitted variantColor="primary">
          <TabList mb="1em">
            <Tab>BUY</Tab>
            <Tab disabled>SELL</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <FormControl mt={10}>
                <Flex alignItems="center">
                  <FormLabel
                    htmlFor="btcAddress"
                    fontSize="sm"
                    color="primary.500"
                    fontWeight="bold"
                    w="10em"
                  >
                    YOU SEND
                  </FormLabel>
                  <InputGroup width="100%">
                    <InputLeftElement
                      color="gray.300"
                      fontSize="1.2em"
                      children="$"
                    />
                    <Input
                      size="lg"
                      placeholder="enter amount"
                      name="amount"
                      ref={register({
                        required: "This field is required",
                        validate: (value) =>
                          isCurrency(value) || <span>Amount is not valid</span>,
                      })}
                      focusBorderColor="primary.800"
                      isInvalid={!!errors.amount}
                    />
                    <InputRightElement
                      children={
                        <Text color="gray.400" mr={2}>
                          USD
                        </Text>
                      }
                    />
                  </InputGroup>
                </Flex>
                <Flex
                  borderColor="primary.500"
                  borderLeftWidth={2}
                  borderStyle="solid"
                  ml="4px"
                  pl="10px"
                  height="3rem"
                  justifyContent="flex-end"
                >
                  <FormHelperText>
                    {errors.amount && (
                      <Text color="red.500">{errors.amount.message}</Text>
                    )}
                  </FormHelperText>
                </Flex>
              </FormControl>
              <Stack
                isInline
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack isInline alignItems="center">
                  <Box
                    h="10px"
                    w="10px"
                    borderRadius={5}
                    borderColor="primary.500"
                    borderWidth={2}
                    borderStyle="solid"
                  />
                  <Text fontSize="xs" color="primary.500" fontWeight="bold">
                    TRANSACTION FEE (1.0%)
                  </Text>
                </Stack>

                <Text color="primary.800">
                  $
                  {watch("amount")
                    ? (parseFloat(watch("amount")) * 0.01).toFixed(2)
                    : 0}{" "}
                  USD
                </Text>
              </Stack>

              <Flex
                mt="8px"
                borderColor="primary.500"
                borderLeftWidth={2}
                borderStyle="solid"
                ml="4px"
                pl="10px"
                h="3rem"
              />

              <Stack
                isInline
                justifyContent="space-between"
                mt="5px"
                alignItems="center"
              >
                <Text fontSize="sm" color="primary.500" fontWeight="bold">
                  YOU RECEIVE
                </Text>
                <Text fontSize="xl" color="primary.800">
                  {watch("amount")
                    ? (parseFloat(watch("amount")) / btcPrice).toFixed(8)
                    : 0}{" "}
                  BTC
                </Text>
              </Stack>

              <Stack
                isInline
                mt="30px"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="xs" color="primary.500" fontWeight="bold">
                  DELIVERY
                </Text>

                <Stack isInline alignItems="center">
                  <Collapse startingHeight={20} isOpen={expandAddress}>
                    <Text
                      fontSize="sm"
                      color="primary.800"
                      overflow="hidden"
                      style={{
                        textOverflow: expandAddress ? "unset" : "ellipsis",
                        whiteSpace: expandAddress ? "unset" : "nowrap",
                        wordWrap: "break-word",
                      }}
                      ml="10px"
                      maxWidth="170px"
                      width="100%"
                    >
                      {address}
                    </Text>
                  </Collapse>
                  <IconButton
                    aria-label={`${
                      expandAddress ? "Shrink" : "Expand"
                    } address`}
                    icon={expandAddress ? "chevron-up" : "chevron-down"}
                    onClick={() => setExpandAddress((v) => !v)}
                    size="sm"
                    variant="ghost"
                  />
                </Stack>
              </Stack>
              <Stack
                isInline
                justifyContent="space-between"
                alignItems="center"
                marginTop={10}
              >
                <Text color="primary.500" fontWeight="bold" fontSize="sm">
                  TOTAL PAY
                </Text>
                <Text>
                  $
                  {watch("amount")
                    ? (
                        parseFloat(watch("amount")) * 0.01 +
                        parseFloat(watch("amount"))
                      ).toFixed(2)
                    : 0}
                </Text>
              </Stack>

              <FormControl mt={10}>
                <Stack isInline>
                  <FormLabel
                    htmlFor="account"
                    fontSize="sm"
                    color="primary.500"
                    fontWeight="bold"
                  >
                    USING ACCOUNT
                  </FormLabel>
                </Stack>

                <Select
                  placeholder="select option"
                  ref={register({ required: "This field is required" })}
                  name="account"
                  focusBorderColor="primary.800"
                  variant="filled"
                >
                  {cloudNaluAccounts.map(({ value, text }) => (
                    <option value={value} key={value}>
                      {text}
                    </option>
                  ))}
                </Select>

                <FormHelperText>
                  {errors.account && (
                    <Text color="red.500">{errors.account.message}</Text>
                  )}
                </FormHelperText>
              </FormControl>

              <Button
                width="100%"
                variantColor="primary"
                backgroundColor="primary.800"
                mt={5}
                onClick={handleSubmit(onSubmit)}
              >
                CONTINUE
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Layout>
  );
};
