import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>Kwitter</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>

            <div id="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_P6-tqpU0_UtGO9J3nka-78zFR-GIz3QhRA&usqp=CAU"/>



            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
