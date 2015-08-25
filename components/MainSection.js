import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
};

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { filter: SHOW_ALL };

    }

    handleShow(filter) {
        this.setState({ filter });
    }

    render() {
        const { todos, actions } = this.props;
        const { filter } = this.state;
        const filteredTodos = todos.filter(TODO_FILTERS[filter]);
        return (
            <section className="main">
                <ul className="todo-list">
                    {filteredTodos.map(item=>(<TodoItem
                        todo={item}
                        deleteTodo={actions.deleteTodo}
                        editTodo={actions.editTodo}
                        toggleTodo={actions.toggleTodo}
                        />))}
                </ul>
                <Footer
                    todos={todos}
                    actions={actions}
                    onShow={this.handleShow.bind(this)}
                    filter={filter}
                    />
            </section>
        )
    }
}


export default MainSection;