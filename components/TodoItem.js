import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
//import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: false
        }
    }
    handleRemoveTodo(event){
        console.log(this.props);
        this.props.deleteTodo(this.props.todo.id);
    }
    render() {
        const {todo, completeTodo, deleteTodo} = this.props;
        return (
            <li>
                <label>{todo.text}</label>
                <input type="button" onClick={this.handleRemoveTodo.bind(this)}/>
            </li>
        )
    }
}

export default TodoItem;