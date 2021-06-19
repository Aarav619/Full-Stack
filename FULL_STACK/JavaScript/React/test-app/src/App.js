import React from "react";
// "Router ,Route" :to route path to different pages
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"; //react-router-dom
import Test from "./Components/test.js";
import Signup from "./Components/signup.js";
import Login from "./Components/login.js";
import Homepage from "./Components/homepage.js";

class App extends React.Component {
  state = {
    user: {},
  };
  
  componentDidMount(){//this method will be called as soon as the component is mounted ,// setting state inside an componentDidMount will trigger re-rendering 
    let savedUser = localStorage.getItem("user");//retrieving locally stored user one logged in
    if(savedUser && Object.keys(this.state.user).length===0){
      this.setUserState(JSON.parse(savedUser));
    }
  }

  setUserState = (user) =>{
    this.setState({user:user});//setting the userState to user got from local storage
  };
  
  render() {//for rendereing stuff to screen
    return (
      <Router>
        <div>
          {/* <h1>This is Nav Bar</h1> */}
          <Switch> {/* for switching on basis of path */}
            <Route path={"/"} exact>
              <Homepage
              firstName={this.state.user.firstName}
              lastName={this.state.user.lastName}
              />
            </Route>
            <Route path={"/login"} >
              <Login setUserState={"this.setUserState"}/>
            </Route>
            <Route path={"/Signup"} >
              <Signup setUserState={"this.setUserState"}/>
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
