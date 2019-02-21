import React, { Component } from "react";

class NewSpace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logChange = this.logChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    var data = {
      name: this.state.name,
      description: this.state.description
    }
    fetch(`http://localhost:5000/spaces/new`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => response)
  }//


  logChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit} method="POST">
            <label>Name</label>
                <input type="text" onChange={this.logChange} name='name'/>
            <label>Description</label>
                <input type="text" onChange={this.logChange} name='description'/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
  }
}

export default NewSpace
