import React, { Component } from "react";
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import SingleSpace from "./singleSpace";
import Spaces from "./spaces";

class SpacesContainer extends Component {
  render() {
    return (
      <div>
        <h1> All Spaces </h1>
        <Switch>
          <div>
            <Route exact path="/spacesContainer" component={Spaces} />
            <Route path="/spaces/:id" component={SingleSpace} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default SpacesContainer;
