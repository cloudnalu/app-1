import React, { useContext, useState } from "react";
import { Layout } from "../../components/Layout";
import { Flex } from "@chakra-ui/core";
import { ConfirmationBox } from "../../components/ConfirmationBox";
import { useHistory } from "react-router-dom";
import BitcoinContext from "./BitcoinContext";

export const Confirmation = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { address, amountBTC, amountUSD, account, onConfirm } = useContext(
    BitcoinContext
  );

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
          onConfirm={async () => {
            setLoading(true);
            try {
              await onConfirm();
              history.push("/bitcoin/done");
            } catch (error) {
              setError(error);
            }
            setLoading(false);
          }}
          loading={loading}
          error={error}
        />
      </Flex>
    </Layout>
  );
};
