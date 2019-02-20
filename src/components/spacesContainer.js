import React, { Component } from "react";
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import SingleSpace from "./singleSpace"
import Spaces from "./spaces"


class SpacesContainer extends Component {

  render() {
      return (
        <Switch>
        <div>
            <Route exact path="/" component={Spaces}/>
            <Route path="/spaces/:id" component={SingleSpace}/>
            </div>
        </Switch>
      )}
    }

export default SpacesContainer
