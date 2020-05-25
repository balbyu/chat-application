import {
  ADD_MESSAGE,
  USERS_LIST,
  ADD_USER,
} from "../redux/constants/actionTypes";
import { messageReceived, populateUsersList } from "../redux/actions";

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket("ws://localhost:8989");

  // Let the server know that we connected a new client
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: ADD_USER,
        name: username,
      })
    );
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author));
        break;

      case USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
