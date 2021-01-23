import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IDFind from '../components/IDFind';

// import axios from 'axios';

class FindID extends Component {
    render() {
        return (
            <div className="login">
                <div className="loginb2gether">
                    <Link to="/">B2GETHER</Link>
                </div>
                <div className="logintitle">
                    FIND ID
                </div>
                <IDFind />
                <div class="textaligncenter">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        );
    }
}

export default FindID;