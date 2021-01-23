import React, { Component } from 'react';

class TodolistForm extends Component {
    render() {
        const {
            onChange,
            value,
            insertHandler,
        } = this.props;
        return (
            <div class="input-group mb-3">
                <input type="text" onChange={onChange} value={value} class="form-control" />
                <button onClick={insertHandler} class="btn btn-outline-light" type="button" id="button-addon2">ADD</button>
            </div>
        );
    }
}

export default TodolistForm;