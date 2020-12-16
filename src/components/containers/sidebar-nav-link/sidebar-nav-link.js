import React, { PureComponent } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

class SidebarNavLink extends PureComponent {
  render() {
    const { listItemClass, itemTextClass, activeClass, title, to, exact, children } = this.props;
    return (
      <ListItem
        className={listItemClass}
        button
        exact={exact}
        component={NavLink}
        to={to}
        title={title}
        {...(activeClass && {
          activeClassName: activeClass
        })}
      >
        {children}
        <ListItemText className={itemTextClass} primary={title} />
      </ListItem>
    );
  }
}

export default SidebarNavLink;
