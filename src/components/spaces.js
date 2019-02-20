import React, { Component } from "react";

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
        return <p>{eachSpace.name + ": " + eachSpace.description}</p>;
      });
    } else {
      return <p> No Spaces</p>;
    }

  }
}

export default Spaces
