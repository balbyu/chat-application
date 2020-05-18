import React from "react";

class Message extends React.Component {
  render() {
    const { author, message } = this.props;
    return (
      <div id="message">
        <p>
          <i>{author}</i>: {message}
        </p>
      </div>
    );
  }
}

export default Message;
