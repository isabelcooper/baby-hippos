import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "../styling/lumen-bootstrap.css";
import hippo from "../styling/baby-hippo.png";

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
        console.log("before")
        if (user.length > 0) {
          console.log("in here")
          console.log(this.state.password)
          console.log(user[0].password)
          if (this.state.password === user[0].password) {
            this.setState({ redirect: true });
            localStorage.setItem('id', user[0].id)

          }
        }
      });
  }

  render() {
    const { redirect } = this.state;

    if (redirect === true) {
      return <Redirect to="/spaces" />;
    } else {
      return (
        <div id="login" align="center">
        <div id="title-div">
          <h1 id="title"> Baby Hippo BnB</h1><img src={hippo} id="hippo" />
        </div>

          <h2> Log In </h2>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>

              <input type="submit" value="Submit" class="btn btn-primary" />
              <button class="btn btn-outline-warning">
                <Link to={`/users/new`}>Sign Up</Link>
              </button>
            </fieldset>
          </form>


        </div>
      );
    }
  }
}

export default Login;
