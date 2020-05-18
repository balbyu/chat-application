import React from "react";

class Sidebar extends React.Component {
  render() {
    const users = this.props.users;
    return (
      <div>
        <aside id="sidebar" className="sidebar">
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
