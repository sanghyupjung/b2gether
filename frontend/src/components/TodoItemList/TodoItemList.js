import React, { Component } from 'react';
import TodoItem from '../TodoItem'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todolistActions from '../../modules/todolist';

class TodoItemList extends Component {
    deleteHandler = (e, id) => {
        e.preventDefault();
        const {TodolistActions} = this.props;
        TodolistActions.del(id);
    }

    render() {
        const {todolist} = this.props;
        const {deleteHandler} = this;
        const todoitemlist = todolist.map((item) => {
            const {id, content} = item.toJS();
            return (
                <TodoItem deleteHandler={(e) => deleteHandler(e, id)}>
                    {content}
                </TodoItem>
            );
        });
        return (
            <div>{todoitemlist}</div>
        );
    }
}

export default connect(
    (state) => ({
        todolist:state.todolist
    }),
    (dispatch) => ({
        TodolistActions:bindActionCreators(todolistActions, dispatch)
    })
)(TodoItemList);