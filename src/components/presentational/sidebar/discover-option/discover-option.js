import React, { Fragment } from "react";
import { kebabCase } from "lodash";
import { SidebarNavLink } from "../../../containers";

const DiscoverOption = ({ optionsList, classes }) => {
  return (
    <Fragment>
      {!!optionsList.length &&
        optionsList.map((discover, index) => (
          <SidebarNavLink
            key={discover.id || index}
            exact
            listItemClass="NavItem"
            itemTextClass="nested NavItemText"
            activeClass={"active"}
            to={`/discover/${kebabCase(discover.name)}`}
            title={discover.name}
          />
        ))}
    </Fragment>
  );
};

export default DiscoverOption;
