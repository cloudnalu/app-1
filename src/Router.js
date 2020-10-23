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

export const Router = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup">
          {!user ? <SignUpRouter /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <LogIn /> : <Redirect to="/" />}</Route>
        <Route path="/usd">{user ? <USDRouter /> : <Redirect to="/" />}</Route>
        <Route path="/transactions">
          {user ? <Transactions /> : <Redirect to="/" />}
        </Route>
        <Route path="/bitcoin">
          {user ? <BitcoinRouter /> : <Redirect to="/" />}
        </Route>
        <Route path="/404">
          <Error404 />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
