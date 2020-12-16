import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as Routes from "./Routes";
import { DefaultPage } from "./../404-page";

const RootRouter = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/settings" exact component={Routes.Setting} />
        <Route path="/notification" exact component={Routes.Notification} />
        <Route path="/discover-category" exact component={Routes.DiscoverCategory} />
        <Route path="/profile-image" exact component={Routes.ProfileImage} />
        <Route path="/account" exact component={Routes.Account} />
        <Route path="/categories/:category?" exact component={Routes.Category} />
        <Route path="/content/:contentId" component={Routes.Content} />
        <Route path="/discover" component={Routes.Discover} />
        <Route path="/search" exact component={Routes.Search} />
        <Route path="/contact" exact component={Routes.Contact} />
        <Route path="/terms-conditions" exact component={Routes.TermsCondition} />
        <Route path="/privacy-policy" exact component={Routes.PrivacyPolicy} />
        <Route path="/rm" exact component={Routes.Session} />
        <Route path="/" exact component={Routes.Dashboard} />
        <Route path="/404" exact component={DefaultPage} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  );
};
export default RootRouter;
