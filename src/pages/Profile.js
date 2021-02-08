import React from "react";
import Menu from "../components/menu/Menu";
import Messages from "../components/messages/Messages"
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  
  

  GetMessages() {
    this.props.getMessage(username, limit (optional));

  }

  AddNewMessage() {
    this.props.createMessage(text)
  }

  DeleteSpecificMessage(text) {
    this.props
  }
  
  render() {
      console.log(this.props)
      return (
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <Messages username={this.props.match.params.username} />

        </div>
      );
    }
}

export default userIsAuthenticated(Profile);
