import { CONTACT } from "../../actions";

const contactEmailReducer = (state = "", action) => {
    switch (action.type) {
        case CONTACT.CLEAR:
            return "";
        case CONTACT.SET_CONTACT_EMAIL:
            return action.email;
        default:
            return state;
    }
};

export default contactEmailReducer;
