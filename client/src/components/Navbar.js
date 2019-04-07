import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu, Image, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      location
    } = this.props;

    if (user) {
      return (
        <Menu.Menu pointing secondary position="right">
          <Menu.Item>
            <Image
              circular
              size="mini"
              src="https://resources-live.sketch.cloud/files/40fb236a-c9b1-4176-a1ce-58f2a9ff3a08.png?Expires=1554685200&Signature=sBQEvExUEMEyeUTPz7yX5KxsAcBXo2zYEBr9A5X8QdOoF0Vd41RTWVhwL7GoQ8FXbl1ZW1Ad3PI2RAMVfT9tQfnTvwhN6BJBu9jckHAk-tHrbb9Iiw2RcvbaZ3chTjpc~iiM20HTdfCqmTqzihzhW43tm2J1MHtceqLQVOdm6ck_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"
            />
          </Menu.Item>
          <Menu.Item>
            <Link to="/NewVideo">
              <Button size="tiny" color="red">
                Upload Video
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item
            name="logout"
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              id="login"
              name="login"
              active={location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              name="register"
              active={location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    }
  };

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="home"
              id="home"
              active={this.props.location.pathname === "/"}
            >
              <Image
                size="tiny"
                src="https://resources-live.sketch.cloud/files/0c691bf6-95ea-4f35-ad3e-46e842eefe7b.png?Expires=1554685200&Signature=mCOAD2p5sijiSsM4HWpafP-cQs4TRHAouci4hZ3tLuXuA~Rs1Fqe8qYhPw3PvbOg2~vl0hr98Uy3ElhQY5~cO9wXDPzYtAR0lrlBZoFTBFmEkK6Qc8LuZfloXO8sT~b-bmR9xhm1v0mGDwIhJABaOqlq6xbKgBGyjfc-0CVJRXE_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"
              />
            </Menu.Item>
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);
