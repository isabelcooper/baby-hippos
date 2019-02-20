import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SingleSpace from "./singleSpace"


class Spaces extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/spaces")
      .then(response => response.json())
      .then(spaces => {
        this.setState({ spaces: spaces });
      });

  }

  render() {
    const { spaces } = this.state;

    if (spaces.length !== 0) {
      return spaces.map(eachSpace => {
        return (
        <Router>
        <div>
          <button><Link to={`/spaces/${eachSpace.id}`}>{eachSpace.name}</Link></button>
          <Route path="/spaces/:id" component={SingleSpace}/>
        </div>
        </Router>
      )});//
    } else {
      return <p> No Spaces</p>;
    }

  }
}

export default Spaces
