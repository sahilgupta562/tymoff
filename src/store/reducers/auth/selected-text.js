import { AUTH } from "../../actions";

const selectedTextReducer = (state = "", action) => {
    switch (action.type) {
        case AUTH.CLEAR_SELECTED_TEXT:
            return "";
        case AUTH.NON_LOGIN_SELECTED_TEXT:
            return action.text;
        default:
            return state;
    }
};

export default selectedTextReducer;
