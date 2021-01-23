import React, { Component } from 'react';

class HashtagForm extends Component {
    render() {
        const {
            onChange,
            value,
            insertHandler,
        } = this.props;
        return (
            <div>
                <input type="text" onChange={onChange} value={value} class="form-control" />
                <button onClick={insertHandler} class="btn btn-primary">입력</button>
            </div>
        );
    }
}

export default HashtagForm;