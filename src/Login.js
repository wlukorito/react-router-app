import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({auth}) => {
    return (
        <div className="container py-5">
            <div className="jumbotron">
                <h6 className="display-4">Welcome! Login Please</h6>
                <Link to="/admin" >
                    <button className="btn btn-primary" onClick={()=> auth(true)}>LOGIN</button>
                </Link>
                
            </div>
        </div>
    )
};

export default Login;

