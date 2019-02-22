import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SingleSpace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      space: [],
      user: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://localhost:5000/spaces/${id}`)
      .then(response => response.json())
      .then(space => {
        console.log(localStorage.getItem("id"));
        this.setState({ space: space[0] });
        fetch(`http://localhost:5000/users/${space[0].host}`)
        .then(response => response.json())
        .then(user => {
          console.log(user)
          this.setState({ user: user[0] });
          console.log(this.state)
        });
      });
  }

  render() {
    const { space } = this.state;
    const { user } = this.state;

    if (space !== [] && user !== []) {
      return (
        <div>
          <div>
            <h3>Name:</h3>
            <p>{space.name}</p>
            <h3>Description:</h3>
            <p>{space.description}</p>
            <h3>Price Per Night:</h3>
            <p>£{space.ppn}</p>
            <h3>Location:</h3>
            <p>{space.location}</p>
            <h3>Bedrooms:</h3>
            <p>{space.bedrooms}</p>
            <h3>Beds:</h3>
            <p>{space.beds}</p>
            <h3>Host:</h3>
            <p>{user.name}</p>
          </div>
          <div>
            <button>
              <Link to={"/spaces"}>Back to the spaces!</Link>
            </button>
          </div>
        </div>
      );
    }
  }
}

export default SingleSpace;
