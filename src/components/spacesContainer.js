import React, { Component } from "react";
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import SingleSpace from "./singleSpace";
import Spaces from "./spaces";
import NewSpace from "./newSpace";

class SpacesContainer extends Component {
  render() {
    return (
      <div id="spacesContainer">
        <div>
        <h1 id="spacesTitle">Hippo Spaces</h1>
        </div>
          <Switch>
          <div id ="wrapper">
            <Route exact path="/spaces" component={Spaces} />
            <Route path="/spaces/:id" component={SingleSpace} />
            <Route path="/new" component={NewSpace} />
          </div>
        </Switch>

      </div>
    );
  }
}

export default SpacesContainer;
