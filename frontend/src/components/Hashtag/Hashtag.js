import React, { Component } from 'react';

class Hashtag extends Component {
    render() {
        const {children, deleteHandler} = this.props;
        return (
            <div>
                {children}
                <button onClick={deleteHandler}>delete</button>
            </div>
        );
    }
}

export default Hashtag;