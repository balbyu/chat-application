import React from "react";

class AddMessage extends React.Component {
  state = {
    message: "",
  };

  componentDidMount() {
    this.props.addUser("Me");
  }

  updateMessage = (ev) => {
    this.setState({ message: ev.target.value });
  };

  sendMessage = (ev) => {
    if (ev.key === "Enter" && this.state.message !== "") {
      // Dispatch an AddMessage action with the message state and author of self
      this.props.addMessage(this.state.message, "Me");

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
