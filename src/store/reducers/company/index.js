import { combineReducers } from "redux";
import loadingReducer from "./loading";
import errorReducer from "./error";
import dataReducer from "./data";
import selectedCompanyReducer from "./selected-company";

const companyReducers = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  data: dataReducer,
  selectedCompany: selectedCompanyReducer
});

export { companyReducers };
