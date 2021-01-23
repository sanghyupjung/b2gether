import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {children, deleteHandler} = this.props;
        return (
            <div>
                <label name="todoitem">{children}</label>
                &nbsp;
                <button onClick={deleteHandler} class="btn btn-primary">delete</button>
            </div>
        );
    }
}

export default TodoItem;