import { USERS_LIST } from "../constants/actionTypes";

const users = (state = [], action) => {
  switch (action.types) {
    case USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
