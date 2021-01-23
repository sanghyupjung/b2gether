import React, { Component } from 'react';
import axios from 'axios';

class CurrentTodolist extends Component {
    state = {
        todolists: [],
    };

    getTodolists = () => {
        axios
        // .get("accounts/todolist/")
        .get("http://localhost:8000/accounts/todolist/")
        .then(({data}) => {
            // console.log(data);
            this.setState({
                todolists: data,
            });
        })
        .catch((e) => {
            console.error(e);
        });
    };

    componentDidMount() {
        this.getTodolists();
    }

    render() {
        const { children } = this.props;
        // console.log(children);
        const {todolists} = this.state;
        const todoitemlist = todolists.map((item) => {
            const {id, user, name, year, month, day} = item;
            if(user === children[0] 
                && year === children[1].substring(0, 4) 
                && month === children[1].substring(4, 6) 
                && day === children[1].substring(6, 8)) {
                return (
                    <div>{name}</div>
                );
            }
        });
        return (
            <div>{todoitemlist}</div>
        );
    }
}

export default CurrentTodolist;