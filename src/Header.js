import React from "react";
import { Link } from "react-router-dom";

const Header = ({auth}) => {
  return (
    <div className="jumbotron text-center">
      <h6 className="display-4">Header</h6>
      <Link to="/admin" className="px-2">Home</Link>
      <Link to="/users" className="px-2">Users</Link>
      <Link to="/uploads" className="px-2">Uploads</Link>
      <button className="btn btn-danger btn-sm" onClick={() => auth(false)}>Logout</button>
    </div>
  );
};

export default Header;
