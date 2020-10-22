import React, { createContext, useState } from "react";

const BitcoinContext = createContext({});
export default BitcoinContext;

export const BitcoinContextProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [amountBTC, setAmountBTC] = useState(2);
  const [amountUSD, setAmountUSD] = useState();
  const [account, setAccount] = useState();

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
      }}
    >
      {children}
    </BitcoinContext.Provider>
  );
};
