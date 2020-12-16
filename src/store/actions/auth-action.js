import { AUTH } from "./action-types";

const loadAuth = () => ({
  type: AUTH.LOAD
});

const clearAuth = () => ({
  type: AUTH.CLEAR
});

const setUser = user => ({
  type: AUTH.LOAD_SUCCESS,
  user
});

const setAuthError = error => ({
  type: AUTH.LOAD_FAILED,
  error
});

export { loadAuth, clearAuth, setUser, setAuthError };
