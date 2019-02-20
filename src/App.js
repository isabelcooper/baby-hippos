import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Spaces from "./components/spaces"
import SingleSpace from "./components/singleSpace"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1> All Spaces </h1>
        <div>
          <Spaces/>
        </div>


      </div>
        )
  } // << end of render
} //<< end of class

export default App;
