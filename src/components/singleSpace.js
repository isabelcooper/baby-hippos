import React, { Component } from "react";

class SingleSpace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      space: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/spaces/1")
      .then(response => response.json())
      .then(space => {
        this.setState({ space: space[0] });
      });

  }

  render() {
    const { space } = this.state;

    if (space != []) {
      return (
        <div>
            <p>{space.name}</p>
            <p>{space.description}</p>
        </div>
      );
    }

  }
}

export default SingleSpace
