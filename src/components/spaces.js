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
    return (
      <div>
        <div>
          <button class="btn btn-outline-info">
            <Link to={`/new`}>Add a Space!</Link>
          </button>
        </div>
        {spaces.map(eachSpace => {
          return (
            <div id="eachSpaces">
              <h1>{eachSpace.name}</h1>
              <p>{eachSpace.location}</p>
              <button>
                <Link to={`/spaces/${eachSpace.id}`}>View This Space!</Link>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Spaces;
