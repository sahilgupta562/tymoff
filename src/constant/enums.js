const ModalType = {
  FOLDER_CONTEXT_MENU: "folder_context_menu",
  FILE_CONTEXT_MENU: "file_context_menu",
  COMPANY_LISTING_MENU: "company_listing_menu",
  DELETE_FILE_FOLDER: "delete_file_folder",
  ADD_FOLDER: "add_folder",
  MOVE_FILE_FOLDER: "move_file_folder",
  RENAME_FOLDER: "rename_folder",
  UPLOAD_FOLDER: "upload_folder"
};

const DocumentType = {
  INVOICE: "INVOICE",
  RECEIPT: "RECEIPT",
  DEBIT_NOTE: "DEBIT_NOTE",
  CREDIT_NOTE: "CREDIT_NOTE",
  IMPORT_PERMIT: "IMPORT_PERMIT"
};

const ActionType = {
  FILE: "file",
  FOLDER: "folder"
};

export { ModalType, DocumentType, ActionType };
