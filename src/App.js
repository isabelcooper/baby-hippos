import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Spaces from "./components/spaces"
import SingleSpace from "./components/singleSpace"

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   user: [],
    //   users: [],
    //   space: [],
    //   // spaces: []
    // };
  }

  // componentDidMount() {
  //   fetch("http://localhost:5000/users/1")
  //     .then(response => response.json())
  //     .then(users => {
  //       this.setState({ user: users[0] });
  //     });
  //
  //   fetch("http://localhost:5000/users")
  //     .then(response => response.json())
  //     .then(users => {
  //       this.setState({ users: users });
  //     });
  //
  //   fetch("http://localhost:5000/spaces/1")
  //     .then(response => response.json())
  //     .then(spaces => {
  //       this.setState({ space: spaces[0] });
  //     });
  //
  //   // fetch("http://localhost:5000/spaces")
  //   //   .then(response => response.json())
  //   //   .then(spaces => {
  //   //     this.setState({ spaces: spaces });
  //   //   });
  //
  // }

  render() {

    return(

      <div>
        <h1> All Spaces </h1>
        <div>
          <Spaces/>
        </div>
        <h1> Idividual Space </h1>
        <div>
          <SingleSpace/>
        </div>
      </div>
        )

    // const { user } = this.state;
    // const { users } = this.state;
    // // const { spaces } = this.state;
    // const { space } = this.state;

    // if (spaces.length !== 0) {
    //   return spaces.map(eachSpace => {
    //     return <p>{eachSpace.name + ": " + eachSpace.description}</p>;
    //   });
    // } else {
    //   return <p> No Spaces</p>;
    // }
    //
    // if (space != []) {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>{space.name}</p>
    //         <p>{space.description}</p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         />
    //       </header>
    //     </div>
    //   );
    // }
    //
    // if (users.length !== 0) {
    //   return users.map(eachUser => {
    //     return <p>{eachUser.email + ": " + eachUser.password}</p>;
    //   });
    // } else {
    //   return <p> No Users</p>;
    // }
    //
    // if (user != []) {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>{user.email}</p>
    //         <p>{user.password}</p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         />
    //       </header>
    //     </div>
    //   );
    // }
  } // << end of render
} //<< end of class

export default App;
