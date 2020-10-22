import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUpRouter } from "./pages/auth/signUp/SignUpRouter";
import { LogIn } from "./pages/auth/LogIn";
import { USDRouter } from "./pages/USDBalance/USDRouter";
import { Transactions } from "./pages/USDTransactions/Transactions";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup">
          <SignUpRouter />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/usd">
          <USDRouter />
        </Route>
        <Route path="/transactions">
          <Transactions />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
