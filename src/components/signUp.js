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
      name: '',
      email: '',
      password: '',
      loggedIn: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logChange = this.logChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    console.log(data)
    fetch('http://localhost:5000/users/new', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => {this.setState({ loggedIn: true }); console.log(this.state) }  )
  }

  logChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { loggedIn } = this.state
      if (loggedIn === true) {
        return <Redirect to="/spaces" />;
      } else {
        return (
          <div>
            <form onSubmit={this.handleSubmit} method="POST">
              <label>Name</label>
                  <input type="text" onChange={this.logChange} name='name'/>
              <label>Email</label>
                  <input type="text" onChange={this.logChange} name='email'/>
              <label>Password</label>
                  <input type="text" onChange={this.logChange} name='password'/>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      }
  }
}

export default NewUser
