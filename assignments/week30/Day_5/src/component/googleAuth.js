import React from 'react';
import googleKeys from '../config/google.json';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class GoogleAuth extends React.Component {
  state = {
    loggedIn: false
  }
  componentDidMount() {
    // console.log("Window" , window.gapi.load)
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: googleKeys.client_id,
        //   scope: 'email profile openid https://www.googleapis.com/auth/youtube',
          scope: 'email profile openid'
        })
        .then(() => {
            console.log("APCheckI" , window.gapi.auth2)
            this.auth = window.gapi.auth2.getAuthInstance();
            // console.log(this.auth.currentUser.get())
            // this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    this.setState({
      loggedIn: isSignedIn
    });
    if (isSignedIn) {
      console.log("If signed in ",this.auth.currentUser.get().getId());
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

  renderAuthButton() {
    if (this.state.loggedIn === null) {
      return null;
    } else if (this.state.loggedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className="btn btn-info">
          <i className="google-icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="btn btn-primary">
          <i className="google-icon" />
          Sign Up with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;