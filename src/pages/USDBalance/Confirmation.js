import React, { useContext, useState } from "react";
import USDContext from "./USDContext";
import { Layout } from "../../components/Layout";
import { Flex } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { ConfirmationBox } from "../../components/ConfirmationBox";

export const Confirmation = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { formData, transactionType, onConfirm } = useContext(USDContext);

  return (
    <Layout title={`${transactionType} USD`.toUpperCase()}>
      <Flex
        backgroundColor="white"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        <ConfirmationBox
          heading={`SENDING $${formData?.amount} USD`}
          lines={[`From $${formData?.from}`, `To $${formData?.to}`]}
          onGoBack={() => history.back()}
          onConfirm={async () => {
            setLoading(true);
            try {
              await onConfirm();
              history.push("/usd/done");
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
