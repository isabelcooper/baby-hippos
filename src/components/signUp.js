import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      loggedIn: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    fetch("http://localhost:5000/users/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(response => {this.setState({ loggedIn: true })  } )
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { loggedIn } = this.state
      if (loggedIn === true) {
        return <Redirect to="/" />;
      } else {

        return (
          <div>
            <h2> Sign Up </h2>
            <form onSubmit={this.handleSubmit} method="POST">
              <fieldset>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter name"
                    name="name"
                    onChange={this.logChange}
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={this.logChange}
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={this.logChange}
                  />
                </div>

                <input type="submit" value="Submit" class="btn btn-primary" />

              </fieldset>
            </form>


          </div>
        );


      }
  }
}

export default NewUser
