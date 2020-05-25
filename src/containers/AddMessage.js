import { connect } from "react-redux";
import AddMessageComponent from "../components/AddMessage";
import { addMessage, addUser } from "../redux/actions";

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, author) => {
    dispatch(addMessage(message, author));
  },
  addUser: (name) => {
    dispatch(addUser(name));
  },
});

export const AddMessage = connect(
  () => ({}),
  mapDispatchToProps
)(AddMessageComponent);
