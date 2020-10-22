import React from "react";
import { Switch, Route } from "react-router-dom";
import { SignUp } from "./SignUp";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { SignUpContextProvider } from "./SignUpContext";
import { Verification } from "./Verification";
import { Step3 } from "./Step3";

export const SignUpRouter = () => {
  return (
    <SignUpContextProvider>
      <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/signup/1">
          <Step1 />
        </Route>
        <Route path="/signup/2">
          <Step2 />
        </Route>
        <Route path="/signup/verification">
          <Verification />
        </Route>
        <Route path="/signup/3">
          <Step3 />
        </Route>
      </Switch>
    </SignUpContextProvider>
  );
};
