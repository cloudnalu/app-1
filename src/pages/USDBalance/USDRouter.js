import React from "react";
import { Route, Switch } from "react-router-dom";
import { USDContextProvider } from "./USDContext";
import { DepositWithdraw } from "./DepositWithdraw";
import { Confirmation } from "./Confirmation";
import { Done } from "./Done";

export const USDRouter = () => {
  return (
    <USDContextProvider>
      <Switch>
        <Route path="/usd" exact>
          <DepositWithdraw />
        </Route>
        <Route path="/usd/confirm">
          <Confirmation />
        </Route>
        <Route path="/usd/done">
          <Done />
        </Route>
      </Switch>
    </USDContextProvider>
  );
};
