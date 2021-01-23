import React, { Component } from 'react';

import TodolistForm from '../components/TodolistForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todolistformActions from '../modules/todolistform';
import * as todolistActions from '../modules/todolist';

class TodolistFormContainer extends Component {
    changeHandler = (e) => {
        const {value} = e.target;
        const {TodolistFormActions} = this.props;
        TodolistFormActions.formChange(value);
    }

    id = 0;

    getItemId = () => {
        return this.id++;
    }

    insertHandler = (e) => {
        e.preventDefault();
        const {value, TodolistFormActions, TodolistActions} = this.props;
        const new_item = {
            content: value,
            complete: false,
            id: this.getItemId(),
        };
        TodolistActions.add(new_item);
        TodolistFormActions.formChange('');
    }

    render() {
        const {value} = this.props;
        const {changeHandler, insertHandler} = this;
        return (
            <TodolistForm value={value}
            onChange={changeHandler}
            insertHandler={insertHandler}
            />
        );
    }
}

export default connect(
    (state) => ({
        value: state.todolistform.get('value')
    }),
    (dispatch) => ({
        TodolistFormActions: bindActionCreators(todolistformActions, dispatch),
        TodolistActions: bindActionCreators(todolistActions, dispatch),
    })
)(TodolistFormContainer);