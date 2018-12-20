import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUrlHash, parseHashParams } from './utils';
import Feed from './components/Feed';

class App extends Component {
  constructor(props) {
  super(props)

  this.state = {
    accessToken: null
   }
  }
    componentDidMount() {
      const hasParams = parseHashParams( getUrlHash())
      if (hasParams.access_token) {
        this.setState ({accessToken: hasParams.access_token})
      }
      console.log(hasParams)
    }


  render() {
    if (this.state.accessToken) {
      return (
        <Feed accessToken={this.state.accessToken}/>
      )
    } else {
         return (
        <div className="App">
         <Login/>
        
        </div>
      );
    }
  }
}

export default App;
