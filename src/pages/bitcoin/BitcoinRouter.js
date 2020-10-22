import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BitcoinContextProvider } from "./BitcoinContext";
import { Address } from "./Address";
import { Buy } from "./Buy";
import { Confirmation } from "./Confirmation";

export const BitcoinRouter = () => {
  return (
    <BitcoinContextProvider>
      <Switch>
        <Route path="/bitcoin" exact>
          <Redirect to="/bitcoin/address" />
        </Route>

        <Route path="/bitcoin/address">
          <Address />
        </Route>

        <Route path="/bitcoin/buy">
          <Buy />
        </Route>

        <Route path="/bitcoin/confirm">
          <Confirmation />
        </Route>
      </Switch>
    </BitcoinContextProvider>
  );
};
