import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "../styling/lumen-bootstrap.css";

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
        <form>
          <fieldset>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      );
    }
  }
}

export default Login;

//
// return (
//   <div>
//     <form onSubmit={this.handleSubmit}>
//       <div class="form-group row">
//         <label for="email" class="col-sm-2 col-form-label">Email</label>
//         <div class="col-sm-10">
//           <input type="text" readonly="" class="form-control" name="email" value={this.state.email}
//           onChange={this.handleChange}/>
//         </div>
//       </div>
//
//
//       <div class="form-group row">
//         <div class="col-sm-10">
//           <label for="password" class="col-sm-2 col-form-label">
//             Password
//           </label>
//         </div>
//
//         <div class="col-sm-10">
//           <input
//             type="text"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//         </div>
//       </div>
//       <div class="form-group row">
//         <input type="submit" value="Submit" class="btn btn-danger" />
//       </div>
//     </form>
//
//     <div class="form-group row">
//       <button class="btn btn-danger">
//         <Link to={`/users/new`}>Sign Up</Link>
//       </button>
//     </div>
//   </div>
// );
