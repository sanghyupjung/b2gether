import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PasswordChange from '../components/PasswordChange';

// import axios from 'axios';

class ChangePassword extends Component {
    render() {
        return (
            <div className="login">
                <div className="loginb2gether">
                    <Link to="/">B2GETHER</Link>
                </div>
                <div className="logintitle">
                    CHANGE PASSWORD
                </div>
                <PasswordChange />
                <div class="textaligncenter">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        );
    }
}

export default ChangePassword;