import React, { createContext, useState, useCallback } from "react";

const USDContext = createContext({});
export default USDContext;

export const USDContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [transactionType, setTransactionType] = useState("deposit");

  // TODO: set this to an async function which resolves when request is complete, and throws any errors with the message being displayed to the user
  const onConfirm = async () => {
    // set timeout to simulate AJAX request
    return new Promise((resolve, reject) => {
      setTimeout(
        () => reject("Error creating transaction, please try again later"),
        1000
      );
    });
  };

  return (
    <USDContext.Provider
      value={{
        formData,
        setFormData,
        transactionType,
        setTransactionType,
        onConfirm,
      }}
    >
      {children}
    </USDContext.Provider>
  );
};
