import React, { createContext, useState, useCallback } from "react";

const USDContext = createContext({});
export default USDContext;

export const USDContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [transactionType, setTransactionType] = useState("deposit");
  const [error, setError] = useState(false);

  const onConfirm = useCallback(() => {
    // TODO: do something with the data
    try {
      console.log(formData);
    } catch (error) {
      // go to an error page
    }
  }, [formData]);

  return (
    <USDContext.Provider
      value={{
        formData,
        setFormData,
        transactionType,
        setTransactionType,
        onConfirm,
        error,
      }}
    >
      {children}
    </USDContext.Provider>
  );
};
