import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <p>Hello</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
