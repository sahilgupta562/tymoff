import { UI } from "./action-types";

const openSidebar = () => ({
  type: UI.OPEN_SIDEBAR
});

const closeSidebar = () => ({
  type: UI.CLOSE_SIDEBAR
});

const openModal = modal => ({
  type: UI.OPEN_MODAL,
  modal
});

const closeModal = modal => ({
  type: UI.CLOSE_MODAL,
  modal
});

const setActionType = actionType => ({
  type: UI.SET_ACTION_TYPE,
  actionType
});

const setFileContextMenuPosition = position => ({
  type: UI.SET_FILE_CONTEXT_POSITION,
  position
});

const setFolderContextMenuPosition = position => ({
  type: UI.SET_FOLDER_CONTEXT_POSITION,
  position
});

const setCompanyListingMenuPosition = position => ({
  type: UI.SET_COMPANY_LISTING_POSITION,
  position
});

export { openSidebar, closeSidebar, openModal, closeModal, setFileContextMenuPosition, setFolderContextMenuPosition, setCompanyListingMenuPosition, setActionType };
