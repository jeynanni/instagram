import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props)
        this.onLogInClick = this.onLogInClick.bind(this)
        }
        onLogInClick(){
            console.log('faccio login')
            window.location.href = "https://api.instagram.com/oauth/authorize/?client_id=fe200469b45e4545897e97168e24c0e5&redirect_uri=http://localhost:3000/&response_type=token&scope=public_content"
    }
  render() {
    return (
      <div className="Login">
      <Button color="primary" onClick={this.onLogInClick}>Log In</Button>{' '}
      </div>
    );
  }
}

export default Login;
