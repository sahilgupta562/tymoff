import { combineReducers } from "redux";
import { folderReducers } from "./folder";
import { authReducers } from "./auth";
import { uiReducers } from "./ui";
import { companyReducers } from "./company";
import { documentReducers } from "./document";
import { formReducers } from "./forms";

const rootReducer = combineReducers({
  auth: authReducers,
  folder: folderReducers,
  ui: uiReducers,
  company: companyReducers,
  document: documentReducers,
  forms: formReducers
});

export { rootReducer };
