import { combineReducers } from "redux";
import contactEmailReducer from "./contact-email";
import contactNameReducer from "./contact-name";
import contactMessageReducer from "./contact-message";
import errorReducer from "./error";
import loadingReducer from "./loading";

const contactReducer = combineReducers({
  name: contactNameReducer,
  email: contactEmailReducer,
  message: contactMessageReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});

export { contactReducer };
