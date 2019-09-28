import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Uploads from "./Uploads";
import Users from "./Users";

const Dashboard = ({ match }) => {
  //   console.log(match);
  return (
    <div className="dashboard">
      <div className="container">
        <Link to={`${match.url}/links`} className="px-2">
          Show Links
        </Link>
        <Link to={`${match.url}/games`}>Second Chance</Link>
        <Link to={`${match.url}/users`}>Another Link</Link>
        <h2>Dashboard Content</h2>
        {/* <Switch> */}
        <Route
          exact
          path={`${match.path}/:slug`}
          render={({match}) => <h5>{match.params.slug}</h5> }
        />
        {/* </Switch> */}
      </div>
    </div>
  );
};

export default Dashboard;
