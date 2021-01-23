// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from 'store';

import PasswordReset from '../components/PasswordReset';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

// import axios from 'axios';

const ResetPassword = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    useEffect(() => {
        if (store.idPassed === false) {
            alert("Wrong access!\nGo back to main page!");
            history.push('/');
        }
    }, []);
    return (
        <div className="login">
            <div className="loginb2gether">
                <Link to="/">B2GETHER</Link>
            </div>
            <div className="logintitle">
                CHANGE PASSWORD
            </div>
            <PasswordReset />
        </div>
    )
}

export default ResetPassword;