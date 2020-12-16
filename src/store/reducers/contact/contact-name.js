import { CONTACT } from "../../actions";

const contactNameReducer = (state = "", action) => {
    switch (action.type) {
        case CONTACT.CLEAR:
            return "";
        case CONTACT.SET_CONTACT_NAME:
            return action.name;
        default:
            return state;
    }
};

export default contactNameReducer;
