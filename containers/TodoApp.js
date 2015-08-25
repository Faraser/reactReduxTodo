import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

class TodoApp extends Component {
    render() {
        const { todos, dispatch } = this.props;
        const actions = bindActionCreators(TodoActions, dispatch);

        return (
            <div className="todoapp">
                <Header todos={todos} actions={actions}/>
                <MainSection todos={todos} actions={actions}/>

            </div>
        );
    }
}

function select(state) {
    return {
        todos: state.todos
    };
}

export default connect(select)(TodoApp);