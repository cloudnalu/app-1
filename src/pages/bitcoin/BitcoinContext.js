import React, { createContext, useState } from "react";

const BitcoinContext = createContext({});
export default BitcoinContext;

export const BitcoinContextProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [amountBTC, setAmountBTC] = useState(2);
  const [amountUSD, setAmountUSD] = useState();
  const [account, setAccount] = useState();

  // TODO: set this from an API
  const [btcPrice] = useState(15000);

  // TODO: set this to an async function which resolves when request is complete, and throws any errors with the message being displayed to the user
  const onConfirm = async () => {
    // set timeout to simulate AJAX request
    return new Promise((resolve, reject) => {
      setTimeout(
        // () => reject("Error purchasing bitcoin, please try again later"),
        () => resolve(),
        1000
      );
    });
  };

  return (
    <BitcoinContext.Provider
      value={{
        address,
        setAddress,
        amountBTC,
        setAmountBTC,
        amountUSD,
        setAmountUSD,
        account,
        setAccount,
        btcPrice,
        onConfirm,
      }}
    >
      {children}
    </BitcoinContext.Provider>
  );
};
