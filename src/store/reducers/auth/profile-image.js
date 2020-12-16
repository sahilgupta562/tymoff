import { AUTH } from "../../actions";

const profileImageReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH.UPDATE_PROFILE:
      return {};
    case AUTH.CHANGE_PROFILE_IMAGE:
      return action.profileImage;
    default:
      return state;
  }
};

export default profileImageReducer;
