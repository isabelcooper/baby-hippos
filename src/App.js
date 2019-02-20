import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      users: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/users/1")
      .then(response => response.json())
      .then(users => {
        this.setState({ user: users[0] });
      });

    fetch("http://localhost:5000/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ users: users });
      });
  }

  render() {
    const { user } = this.state;
    const { users } = this.state;

    if (users.length !== 0) {
      return users.map(eachUser => {
        return <p>{eachUser.email + ": " + eachUser.password}</p>;
      });
    } else {
      return <p> No Users</p>;
    }

    if (user != []) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{user.email}</p>
            <p>{user.password}</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            />
          </header>
        </div>
      );
    }
  }
}

export default App;
