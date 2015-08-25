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
    handleRemoveTodo(id){
        console.log(this.props);
        this.props.deleteTodo(id);
    }
    handleEditTodo(event){
        let text = event.target.value.trim();
        console.log('id', this.props.todo.id);
        if (event.which === 13){
            this.props.editTodo(this.props.todo.id, text);

        } else if (event.which === 27) {
            event.target.value = this.props.todo.text;
        }
    }
    render() {
        const {todo, completeTodo, deleteTodo, editTodo} = this.props;
        return (
            <li>
                <label>{todo.text}</label>
                <input type="button" onClick={this.handleRemoveTodo.bind(this, todo.id)}/>
                <input type="text" onKeyUp={this.handleEditTodo.bind(this)} />
            </li>
        )
    }
}

export default TodoItem;