import React, { Component } from "react";
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import SpacesContainer from "./components/SpacesContainer"
import Login from "./components/login";
import NewUser from "./components/signUp";
import "./styling/lumen-bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{margin: "50px"}}>

        <h1> Baby Hippo BnB</h1>
        <Switch>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/users/new" component={NewUser} />
            <Route
              path="/spaces"
              component={SpacesContainer}
            />
          </div>
        </Switch>

      </div>
    );
  } // << end of render
} //<< end of class

export default App;

//
// return spaces.map(eachSpace => {
//   return (
//   <div>
//     <Switch>
//     <button><Link to={`/spaces/${eachSpace.id}`}>{eachSpace.name}</Link></button>
//
//     <Route path="/spaces/:id" component={SingleSpace}/>
//     <Route path="/" component={Spaces}/>
//     </Switch>
//   </div>
// )});
