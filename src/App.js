import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/user/1')
      .then(response => response.json())
      .then(users => { this.setState({ user: users[0] }); console.log(this.state) });
  }

  render() {

    const { user } = this.state;
    console.log(user);
// if there are users
     if(user !={})
    {return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ user.email }</p>
          <p>
            Edit Hi <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    )};
 // /// if there are spaces
 //    return (
 //      <div className="App">
 //        <header className="App-header">
 //          <img src={logo} className="App-logo" alt="logo" />
 //          <p>{ property.name }</p>
 //          <a
 //            className="App-link"
 //            href="https://reactjs.org"
 //            target="_blank"
 //            rel="noopener noreferrer"
 //          >
 //          </a>
 //        </header>
 //      </div>
 //    );
  }
}

export default App;
