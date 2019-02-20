import React, { Component } from "react";

class SingleSpace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      space: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`http://localhost:5000/spaces/${id}`)
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
