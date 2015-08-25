import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
//import Footer from './Footer';
//import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const { todos, actions } = this.props;
        console.log(actions);
        return (
            <ul>
                {todos.map(item=>(<TodoItem
                    todo={item}
                    deleteTodo={actions.deleteTodo}
                    editTodo={actions.editTodo}
                    />))}
            </ul>
        )
    }
}


export default MainSection;