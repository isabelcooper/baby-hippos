import React, { Component } from "react";
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import SingleSpace from "./singleSpace";
import Spaces from "./spaces";
import NewSpace from "./newSpace"

class SpacesContainer extends Component {
  render() {
    return (
      <div>
        <h1> All Spaces </h1>
        <Switch>
          <div>
            <Route exact path="/spaces" component={Spaces} />
            <Route path="/spaces/:id" component={SingleSpace} />
            <Route path="/new" component={NewSpace} />
            <button>
              <Link to={`/new`}>Adda Space!</Link>
            </button>
          </div>
        </Switch>
      </div>
    );
  }
}

export default SpacesContainer;
