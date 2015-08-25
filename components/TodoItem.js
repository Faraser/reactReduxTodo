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

    handleRemoveTodo(id) {
        console.log(this.props);
        this.props.deleteTodo(id);
    }

    handleEditTodo(event) {
        let text = event.target.value.trim();
        console.log('id', this.props.todo.id);
        if (event.which === 13 && text) {
            this.refs.editInput.getDOMNode().blur();

        } else if (event.which === 27) {
            event.target.value = this.props.todo.text;
        }
    }

    handleToggleTodo(id) {
        this.props.toggleTodo(id);
    }

    handleEditStart(event) {
        event.preventDefault();
        this.setState({editing: true}, function () {
            this.refs.editInput.getDOMNode().focus();
        });
    }

    handleEditEnd(event) {
        var text = event.target.value.trim();
        if (text) {
            this.props.editTodo(this.props.todo.id, text);
        } else {
            event.target.value = this.props.todo.text;
        }
        this.setState({
            editing: false
        })
    }

    render() {
        const {todo, toggleTodo, deleteTodo, editTodo} = this.props;
        return (
            <li className={classnames({
                'completed': todo.completed,
                'editing': this.state.editing
            })}>
                <div className="view">
                    <input
                        type="checkbox"
                        onChange={this.handleToggleTodo.bind(this, todo.id)}
                        checked={todo.completed}
                        className="toggle"
                        />
                    <label onDoubleClick={this.handleEditStart.bind(this)}>{todo.text}</label>
                    <button
                        type="button"
                        onClick={this.handleRemoveTodo.bind(this, todo.id)}
                        className="destroy"
                        ></button>
                </div>
                <input
                    type="text"
                    onKeyUp={this.handleEditTodo.bind(this)}
                    onBlur={this.handleEditEnd.bind(this)}
                    value={todo.name}
                    ref="editInput"
                    className="edit"
                    />
            </li>
        )
    }
}

export default TodoItem;