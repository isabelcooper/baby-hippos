import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: [],
      users: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/users/1')
      .then(response => response.json())
      .then(users => { this.setState({ user: users[0] }); console.log(this.state) });

    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(users => { this.setState({ users: users }); console.log(users); console.log(this.state) });
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

     if(user != [])
    {return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ user.email }</p>
          <p>{ user.password }</p>
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


    //  if(users.length != 0 )
    //   { console.log("hello2");
    //     return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>{ users[0].email }</p>
    //       // <p>{ users[1].email }</p>
    //       // <p>{ users[2].email }</p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //       </a>
    //     </header>
    //   </div>
    // )};
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
