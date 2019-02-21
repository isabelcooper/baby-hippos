import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SpacesContainer from "./components/SpacesContainer"
import SingleSpace from "./components/singleSpace"
import NewSpace from "./components/newSpace"


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1> All Spaces </h1>
        <div>
          <SpacesContainer/>
        </div>
        <div>
          <NewSpace/>
        </div>

      </div>
        )
  } // << end of render
} //<< end of class

export default App;


//
// return spaces.map(eachSpace => {
//   return (
//   <div>
//     <Switch>
//     <button><Link to={`/spaces/${eachSpace.id}`}>{eachSpace.name}</Link></button>
//
//     <Route path="/spaces/:id" component={SingleSpace}/>
//     <Route path="/" component={Spaces}/>
//     </Switch>
//   </div>
// )});
