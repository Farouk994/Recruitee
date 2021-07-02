import React, { Fragment } from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Landing from "./components/Layout/Landing/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Jobs from "./components/Layout/Jobs-Public/Jobs"

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/jobs' component={Jobs} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
