import React from "react";

class AddMessage extends React.Component {
  state = {
    message: "",
  };

  updateMessage = (ev) => {
    this.setState({ message: ev.target.value });
    console.log(this.state.message);
  };

  sendMessage = (ev) => {
    if (ev.key === "Enter") {
      // Dispatch an AddMessage action with the message state and author of self
      this.props.dispatch(this.state.message, "Moi");

      // Reset input field
      this.setState({ message: "" });
    }
  };

  render() {
    return (
      <section id="new-message">
        <input
          onChange={this.updateMessage}
          onKeyPress={this.sendMessage}
          value={this.state.message}
          type="text"
        ></input>
      </section>
    );
  }
}

export default AddMessage;
