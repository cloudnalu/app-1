import React from "react";
import { Stack, Heading, Text, Button, Spinner } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

export const ConfirmationBox = ({
  heading,
  lines,
  onGoBack,
  onConfirm,
  loading,
  error,
}) => {
  const history = useHistory();
  return (
    <Stack
      backgroundColor={error ? "red.100" : "primary.100"}
      width="80%"
      alignItems="center"
      px={5}
      pb={5}
      borderRadius={5}
    >
      <Heading size="sm" mt={5} color={error ? "red.800" : "primary.800"}>
        {error ? "ERROR" : heading}
      </Heading>
      {error ? (
        <Text style={{ wordWrap: "break-word" }} maxW="100%">
          {error}
        </Text>
      ) : (
        lines.map((l) => (
          <Text key={l} style={{ wordWrap: "break-word" }} maxW="100%">
            {l}
          </Text>
        ))
      )}
      {loading ? (
        <Spinner size="md" color="primary.800" />
      ) : error ? (
        <Button mt={5} onClick={() => history.push("/")}>
          RETURN HOME
        </Button>
      ) : (
        <Stack isInline>
          <Button color="primary.800" mt={5} onClick={() => onGoBack()}>
            GO BACK
          </Button>
          <Button
            variantColor="primary"
            mt={5}
            backgroundColor="primary.800"
            onClick={() => onConfirm()}
          >
            CONFIRM
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
