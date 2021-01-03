import React from 'react';
import googleKeys from '../config/google.json';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class GoogleAuth extends React.Component {
  state = {
    loggedIn: false
  }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: googleKeys.client_id,
          scope: 'email profile openid'
        })
        .then(() => {
            // console.log("APCheckI" , window.gapi.auth2)
            this.auth = window.gapi.auth2.getAuthInstance();
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    this.setState({
      loggedIn: isSignedIn
    });
    if (isSignedIn) {
      console.log("Logged in successfully");
    } else {
      this.onSignOutClick();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  authButton() {
    if (this.state.loggedIn === null) {
      return null;
    } else if (this.state.loggedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className="btn btn-info">
          Log Out
        </button>
      );
    } else {
      return (
        <button className="google-auth-button" onClick={this.onSignInClick}>
          Login with Google
        </button>
      );
    }
  }

  render() {
    return (
        <div>{this.authButton()}</div>
    )
  }
}

export default GoogleAuth;