import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
      redirect: false
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    fetch(`http://localhost:5000/users/login/${email}`)
      .then(response => response.json())
      .then(user => {
        if (user.length > 0) {
          this.setState({ redirect: true });
        }
      });
  }

  render() {
    const { redirect } = this.state;

    if (redirect === true) {
      return <Redirect to="/spaces" />;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          Email: <br />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          Password: <br />
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
}

export default Login;
