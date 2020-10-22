import React, { useContext } from "react";
import { Layout } from "../../components/Layout";
import { Flex } from "@chakra-ui/core";
import { ConfirmationBox } from "../../components/ConfirmationBox";
import { useHistory } from "react-router-dom";
import BitcoinContext from "./BitcoinContext";

export const Confirmation = () => {
  const history = useHistory();
  const { address, amountBTC, amountUSD, account } = useContext(BitcoinContext);

  const onConfirm = () => console.log("confirm");

  return (
    <Layout title="BUY BITCOIN">
      <Flex
        backgroundColor="white"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        <ConfirmationBox
          heading={`PURCHASING ${amountBTC} BTC`}
          lines={[
            `For $${amountUSD} USD`,
            `From account ${account}`,
            `To ${address}`,
          ]}
          onGoBack={() => history.goBack()}
          onConfirm={() => {
            onConfirm();
            history.push("/usd/done");
          }}
        />
      </Flex>
    </Layout>
  );
};
