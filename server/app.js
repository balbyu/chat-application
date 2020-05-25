import {
  ADD_USER,
  USERS_LIST,
  ADD_MESSAGE,
} from "../src/redux/constants/actionTypes.js";
import WebSocket from "ws";

const port = 8989;

const wss = new WebSocket.Server({ port });

console.log(`Server started on port ${port}.`);

const users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on("connection", (ws) => {
  let index;
  ws.on("message", (message) => {
    const data = JSON.parse(message);
    console.log(message);

    switch (data.type) {
      case ADD_USER:
        // Update our current users array
        index = users.length;
        users.push({ name: data.name, id: index + 1 });

        // Update the client that just connected with the current list of users and messages
        ws.send(
          JSON.stringify({
            type: USERS_LIST,
            users,
          })
        );

        // Update the remaining clients (not the one that we updated in the callback above)
        broadcast(
          {
            type: USERS_LIST,
            users,
          },
          ws
        );
        break;

      case ADD_MESSAGE:
        // Relay the message to all clients. Would need to do something here if we want to maintain a chat history.
        broadcast(
          {
            type: ADD_MESSAGE,
            message: data.message,
            author: data.author,
          },
          ws
        );
        break;

      default:
        break;
    }
  });

  ws.on("close", () => {
    // Remove the user from the server
    users.splice(index, 1);
    broadcast(
      {
        type: "USERS_LIST",
        users,
      },
      ws
    );
  });
});
