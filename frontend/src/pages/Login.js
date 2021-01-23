import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserLogin from '../components/UserLogin';

// import axios from 'axios';

class Login extends Component {
    render() {
        const {history} = this.props;
        return (
            <div className="login">
                <div className="loginb2gether">
                    <Link to="/">B2GETHER</Link>
                </div>
                <div className="logintitle">
                    LOGIN
                </div>
                <UserLogin />
                <div class="textaligncenter">
                    <Link to="/signin">Sign In</Link>
                </div>
                <div class="textaligncenter">
                    <Link to="/findId">Find ID</Link>
                </div>
                <div class="textaligncenter">
                    <Link to="/changePassword">Change Password</Link>
                </div>
            </div>
        );
    }
}

export default Login;