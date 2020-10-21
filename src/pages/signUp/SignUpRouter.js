import React from "react";
import { Switch, Route } from "react-router-dom";
import { SignUp } from "./SignUp";
import { Step1 } from "./Step1";

export const SignUpRouter = () => {
  return (
    <Switch>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route path="/signup/1">
        <Step1 />
      </Route>
    </Switch>
  );
};
