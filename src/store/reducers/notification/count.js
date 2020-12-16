import { NOTIFICATION } from "../../actions";

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case NOTIFICATION.CLEAR:
            return 0;
        case NOTIFICATION.COUNT:
            return action.count;
        default:
            return state;
    }
};

export default countReducer;