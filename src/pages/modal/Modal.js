import React, { PureComponent, Fragment } from "react";
import { AddFolderModal, DeleteFileFolderModal, MoveFileFolderModal, RenameFolderModal, UploadFileModal } from "../../components";
class Modal extends PureComponent {
  render() {
    const { deleteFileFolder, addFolder, moveFileFolder, renameFolder, uploadFolder } = this.props;
    return (
      <Fragment>
        {addFolder && <AddFolderModal />}
        {deleteFileFolder && <DeleteFileFolderModal />}
        {moveFileFolder && <MoveFileFolderModal />}
        {renameFolder && <RenameFolderModal />}
        {uploadFolder && <UploadFileModal />}
      </Fragment>
    );
  }
}

export default Modal;
