import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/LoginForm/Loginform";
import { Home } from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
function App() {
  return (
    <Router>
      <Route> 
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login}/>
          <Route  component={PageNotFound}/>
        </Switch>
      </Route>
    </Router>
  );
}

export default App;