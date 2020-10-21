import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUpRouter } from "./pages/signUp/SignUpRouter";

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
      </Switch>
    </BrowserRouter>
  );
};
