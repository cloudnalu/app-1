import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../../components/Layout";
import {
  Stack,
  Text,
  Link,
  Icon,
  Switch,
  Flex,
  FormLabel,
  Box,
  Button,
  Input,
  FormHelperText,
  FormControl,
  Select,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { isBtcAddress } from "validator";
import useLocalStorage from "react-use-localstorage";
import BitcoinContext from "./BitcoinContext";
import { useHistory } from "react-router-dom";

const learnMoreLink = "https://www.google.com"; // TODO provide link
const youtubeVideoEmbed = "https://www.youtube.com/embed/2QPd-ctGRDM"; // TODO: update this placeholder to required video
const downloadAndInstallLink = "https://bluewallet.io";

export const Address = () => {
  const { setAddress: setContextAddress } = useContext(BitcoinContext);
  const history = useHistory();

  // previous btc addresses are stored in local storage, this can be moved to API storage if required
  const [btcAddressesString, setBtcAddresses] = useLocalStorage(
    "btcAddresses",
    "[]"
  );

  const btcAddresses = JSON.parse(btcAddressesString);

  // store the state of the switch in local storage so that the user doesnt have to switch it all the time
  const [switchChecked, setSwitchChecked] = useLocalStorage(
    "ownBtcAddressSwitch",
    btcAddresses.length > 0
  );

  const { register, errors, handleSubmit, reset, watch } = useForm();

  const onSubmit = (data) => {
    let btcAddress = data.btcAddress || data.btcAddressSelect;

    if (!btcAddresses.includes(btcAddress)) {
      setBtcAddresses(JSON.stringify([...btcAddresses, btcAddress]));
    }

    setContextAddress(btcAddress);
    history.push("/bitcoin/buy");
  };

  return (
    <Layout title="BUY BITCOIN">
      <Stack
        backgroundColor="white"
        flexGrow={1}
        justifyContent="flex-start"
        alignItems="center"
        px={10}
        pt={10}
      >
        <Text color="primary.800" fontSize="xs">
          Users must provide their own BTC wallet address, and custody their own
          bitcoin.{" "}
          <Link isExternal href={learnMoreLink}>
            Learn more here. <Icon name="external-link" mx="2px" />
          </Link>
        </Text>
        {/* if the user has saved addresses, then they dont need to see the switch anymore */}
        {btcAddresses.length === 0 && (
          <Flex justify="center" align="center" mt={10}>
            <FormLabel htmlFor="email-alerts" color="primary.800">
              Do you have a BTC wallet address that you own and have access to?
            </FormLabel>
            <Switch
              id="email-alerts"
              color="primary"
              size="lg"
              onChange={(e) => setSwitchChecked(e.target.checked.toString())}
              isChecked={switchChecked === "true"}
            />
          </Flex>
        )}

        {switchChecked === "true" ? (
          <>
            <FormControl mt={10}>
              <Stack isInline>
                <FormLabel
                  htmlFor="btcAddress"
                  fontSize="sm"
                  color="primary.800"
                >
                  Where would you like to send your purchased bitcoin funds?
                </FormLabel>
              </Stack>

              <Input
                placeholder="bitcoin address"
                variant="filled"
                focusBorderColor="primary.800"
                mt={5}
                name="btcAddress"
                ref={register({
                  validate: (value) =>
                    value
                      ? isBtcAddress(value) || <span>Address is invalid</span>
                      : !!watch("btcAddressSelect") || (
                          <span>Address is required</span>
                        ),
                })}
                onChange={() => reset({ btcAddressSelect: "" })}
              />
              <FormHelperText>
                {errors.btcAddress && (
                  <Text color="red.500">{errors.btcAddress.message}</Text>
                )}
              </FormHelperText>
            </FormControl>

            {btcAddresses.length > 0 && (
              <FormControl mt={10} width="100%">
                <Stack isInline>
                  <FormLabel
                    htmlFor="btcAddress"
                    fontSize="sm"
                    color="primary.800"
                  >
                    or select previously used address
                  </FormLabel>
                </Stack>

                <Select
                  ref={register({
                    validate: (value) =>
                      value
                        ? isBtcAddress(value) || <span>Address is invalid</span>
                        : !!watch("btcAddress") || (
                            <span>Address is required</span>
                          ),
                  })}
                  placeholder="select address"
                  variant="filled"
                  focusBorderColor="primary.800"
                  mt={5}
                  name="btcAddressSelect"
                  onChange={() => reset({ btcAddress: "" })}
                >
                  {btcAddresses.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </Select>

                <FormHelperText>
                  {errors.btcAddressSelect && (
                    <Text color="red.500">
                      {errors.btcAddress.btcAddressSelect}
                    </Text>
                  )}
                </FormHelperText>
              </FormControl>
            )}

            <Button
              mt={20}
              width="80%"
              variantColor="primary"
              backgroundColor="primary.800"
              onClick={handleSubmit(onSubmit)}
            >
              CONTINUE
            </Button>
          </>
        ) : (
          <>
            <Box
              mt={10}
              as="iframe"
              src={youtubeVideoEmbed}
              allowFullScreen
              title="How to video"
            />

            <Text
              width="100%"
              textAlign="left"
              color="primary.800"
              mt={10}
              fontWeight="bold"
            >
              Don't have a wallet yet?
            </Text>
            <Button as="a" href={downloadAndInstallLink} variantColor="primary">
              DOWNLOAD & INSTALL BLUE WALLET
            </Button>
          </>
        )}
      </Stack>
    </Layout>
  );
};
