import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUpRouter } from "./pages/signUp/SignUpRouter";
import { LogIn } from "./pages/LogIn";

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
      </Switch>
    </BrowserRouter>
  );
};
