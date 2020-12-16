import React from "react";
import { kebabCase } from "lodash";
import { Route, Switch } from "react-router-dom";
import DiscoverList from "./discover-list";
import UserDiscoverList from "./user-discover-list";

const DiscoverRouter = ({ discoverList, userDiscoverList }) => {
  return (
    <Switch>
      {!!discoverList.length &&
        discoverList.map((discover, index) => (
          <Route
            key={discover.id || index}
            path={`/discover/${kebabCase(discover.name)}`}
            exact
            render={props => {
              return <DiscoverList key={kebabCase(discover.name)} discoverId={discover.id} discoverName={discover.name} />;
            }}
          />
        ))}
      {!!userDiscoverList.length &&
        userDiscoverList.map((userDiscover, index) => (
          <Route
            key={userDiscover.id || index}
            path={`/discover/${kebabCase(userDiscover.name)}`}
            exact
            render={props => {
              return <UserDiscoverList key={kebabCase(userDiscover.name)} discoverId={userDiscover.id} discoverName={userDiscover.name} />;
            }}
          />
        ))}
    </Switch>
  );
};

export default DiscoverRouter;
