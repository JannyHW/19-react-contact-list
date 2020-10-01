//===Terminal===
//1.npx create-react-app contactlist
//2.cd contactlist
//3.yarn add react-router-dom
//4.yarn start
import "./App.css";
import React from "react";
import Home from "./Home.js";
import Users from "./Users.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//routers: {BrowserRouter}
//route matchers: <Switch>-parent and <Route> -children: need to have "path"
//navigation :<Link>

// create 2 components: Home and Users
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/contact/:id"><Users /></Route>
      </Switch>
    </Router>
  );
}

export default App;
