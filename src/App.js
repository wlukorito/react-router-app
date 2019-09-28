import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Users from "./Users";
import Uploads from "./Uploads";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  
  if (isAuth) {
    return (
      <div className="wrapper">
        <Header auth={setIsAuth} />
        <div className="container">
          <Switch>
            {/* <Route exact path="/:any" component={Dashboard} /> */}
            <Route path="/admin" component={Dashboard} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/uploads" component={Uploads} />
          </Switch>
        </div>
      </div>
    );
  }
  return (
    <>
      <Route
        exact
        path="/"
        component={props => <Login {...props} auth={setIsAuth} />}
      />
      <Route
        path="/:anything"
        component={props => <Login {...props} auth={setIsAuth} />}
      />
    </>
  );
};

export default App;
