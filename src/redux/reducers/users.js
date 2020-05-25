import { USERS_LIST, ADD_USER } from "../constants/actionTypes";

const users = (state = [], action) => {
  switch (action.type) {
    case USERS_LIST:
      return action.users;
    case ADD_USER:
      return state.concat([{ name: action.name, id: action.id }]);
    default:
      return state;
  }
};

export default users;
