import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserCreate from '../components/UserCreate';

// import axios from 'axios';

class Signin extends Component {
    render() {
        return (
            <div className="login">
                <div className="loginb2gether">
                    <Link to="/">B2GETHER</Link>
                </div>
                <div className="logintitle">
                    SIGN IN
                </div>
                <UserCreate />
                <div class="textaligncenter">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        );
    }
}

export default Signin;