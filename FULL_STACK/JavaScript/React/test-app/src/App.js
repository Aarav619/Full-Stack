import React from "react";
// "Router ,Route" :to route path to different pages
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"; //react-router-dom
import Test from "./Components/test.js";
import Signup from "./Components/signup.js";
import Login from "./Components/login.js";

class App extends React.Component {
  state = {
    user: {},
  };
  setUserState
  render() {//for rendereing stuff to screen
    return (
      <Router>
        <div>
          {/* <h1>This is Nav Bar</h1> */}
          <Switch> {/* for switching on basis of path */}
            <Route path={"/"} exact>
              <h1>This is Homepage</h1>
            </Route>
            <Route path={"/login"} >
              <Login />
            </Route>
            <Route path={"/Signup"} >
              <Signup />
            </Route>
            <Route path={"/about-us"} >This is About-us page</Route>
            <Route path={"/contact-us"} >This is contact-us page</Route>
            <Route path={"/test"}>
              <Test />
            </Route>
            <Route path={"/404"} >
              <h1>Page not found</h1>
            </Route>
            <Route path={"/**"}> {/*when undefined route is mentioned it will redirect to 404*/}
              <Redirect to={"/404"} />
            </Route>
          </Switch>
          {/* <h1>This is footer</h1> */}
        </div>
      </Router>
    )
  }
}


export default App;
