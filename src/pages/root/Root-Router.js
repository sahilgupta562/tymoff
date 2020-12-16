import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Login from "./../login";
import Signup from "./../signup";
import SignupSuccess from "./../signup-success";
import VerifyEmail from "./../verify-email";
import UnverifyEmail from "./../unverify-email";

const RootRouter = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signup-success" exact component={SignupSuccess} />
        <Route path="/user/verifyEmail" exact component={VerifyEmail} />
        <Route path="/unverify-email" exact component={UnverifyEmail} />
        <Route path="/" component={Layout} />
      </Switch>
    </Fragment>
  );
};
export default RootRouter;
