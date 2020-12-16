import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./../dashboard";
import Document from "./../document";

const SecureRouter = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/document" exact component={Document} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  );
};
export default SecureRouter;
