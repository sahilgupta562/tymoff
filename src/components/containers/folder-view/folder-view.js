import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { TreeView } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
import { Folder } from "@material-ui/icons";
import { default as MenuItem } from "../menu-item";
import { styles } from "./folder-view.style";
import { default as FolderContextMenu } from "../folder-context-menu";
import { ModalType, ActionType } from "../../../constant";

class FolderView extends PureComponent {
  showContextMenu = (event, folderPath) => {
    const { setFolderContextMenuPosition, setSelectedFolder, openModal, selectedFolder, setActionType } = this.props;
    event.preventDefault();
    event.stopPropagation();
    setFolderContextMenuPosition({ mouseX: event.clientX - 2, mouseY: event.clientY - 4 });
    if (selectedFolder !== folderPath) setSelectedFolder(folderPath);
    setActionType(ActionType.FOLDER);
    openModal(ModalType.FOLDER_CONTEXT_MENU);
    return false;
  };

  handleFolderSelection = folderPath => {
    const { setSelectedFolder } = this.props;
    setSelectedFolder(folderPath);
  };

  getTreeItemsFromData = treeItems => {
    return (
      treeItems &&
      treeItems.map(treeItemData => {
        let children = undefined;
        if (treeItemData.children && !!treeItemData.children.length) {
          children = this.getTreeItemsFromData(treeItemData.children.filter(x => x.dir));
        }
        return (
          <MenuItem
            key={treeItemData.path}
            nodeId={treeItemData.path}
            labelText={treeItemData.name}
            labelIcon={Folder}
            children={children}
            bgColor={"#4f83cc"}
            color={"#fff"}
            onContextMenu={e => {
              this.showContextMenu(e, treeItemData.path);
            }}
            onClick={() => this.handleFolderSelection(treeItemData.path)}
          />
        );
      })
    );
  };
  render() {
    const { classes, folders, selectedCompany, selectedNodes, selectedFolder, isLoading } = this.props;
    return (
      <Fragment>
        <FolderContextMenu />
        <TreeView className={classes.root} expanded={selectedNodes} selected={selectedFolder} defaultEndIcon={<div style={{ width: 24 }} />}>
          <MenuItem
            nodeId={selectedCompany.companyID}
            labelText={"All Documents"}
            bgColor={"#4f83cc"}
            color={"#fff"}
            labelIcon={Folder}
            children={!isLoading && folders && !!folders.length ? this.getTreeItemsFromData(folders.filter(x => x.dir)) : []}
            onContextMenu={e => {
              this.showContextMenu(e, selectedCompany.companyID);
            }}
            onClick={() => this.handleFolderSelection(selectedCompany.companyID)}
          />
        </TreeView>
      </Fragment>
    );
  }
}

FolderView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderView);
