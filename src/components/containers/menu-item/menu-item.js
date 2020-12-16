import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TreeItem } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./menu-item.style";

class MenuItem extends PureComponent {
  render() {
    const { classes, labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = this.props;
    return (
      <TreeItem
        label={
          <div className={classes.labelRoot}>
            <LabelIcon color="inherit" className={classes.labelIcon} />
            <Typography variant="body2" className={classes.labelText}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </div>
        }
        style={{
          "--tree-view-color": color,
          "--tree-view-bg-color": bgColor
        }}
        classes={{
          root: classes.root,
          content: classes.content,
          expanded: classes.expanded,
          selected: classes.selected,
          group: classes.group,
          label: classes.label
        }}
        {...other}
      />
    );
  }
}

MenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired
};

export default withStyles(styles)(MenuItem);
