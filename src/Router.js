import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUpRouter } from "./pages/auth/signUp/SignUpRouter";
import { LogIn } from "./pages/auth/LogIn";
import { USDRouter } from "./pages/USDBalance/USDRouter";
import { Transactions } from "./pages/USDTransactions/Transactions";
import { BitcoinRouter } from "./pages/bitcoin/BitcoinRouter";
import { useSelector } from "react-redux";
import { Error404 } from "./pages/Error404";
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from './app.config'

export const Router = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
    <Security {...config}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup">
          {!user ? <SignUpRouter /> : <Redirect to="/" />}
        </Route>
        <Route path="/login" exact>{!user ? <LogIn /> : <Redirect to="/" />}</Route>
        <SecureRoute path="/usd">{user ? <USDRouter /> : <Redirect to="/" />}</SecureRoute>
        <SecureRoute path="/transactions">
          {user ? <Transactions /> : <Redirect to="/" />}
        </SecureRoute>
        <SecureRoute path="/bitcoin">
          {user ? <BitcoinRouter /> : <Redirect to="/" />}
        </SecureRoute>
        <Route path="/implicit/callback" exact><LoginCallback/></Route>
        <Route path="/404">
          <Error404 />
        </Route>
        <Redirect to="/404" />
      </Switch>
      </Security>
    </BrowserRouter>
  );
};
