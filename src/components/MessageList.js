import React from "react";
import Message from "./Message";

class MessageList extends React.Component {
  state = {};

  render() {
    const messages = this.props.messages;
    return (
      <section id="messages-list">
        <ul>
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </ul>
      </section>
    );
  }
}

export default MessageList;
