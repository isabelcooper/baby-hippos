import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    return spaces.map(eachSpace => {
      return (
        <div>
          <button>
            <Link to={`/spaces/${eachSpace.id}`}>{eachSpace.name}</Link>
          </button>
        </div>
      );
    });
  }
}

export default Spaces;
