import React, { Component, PropTypes } from 'react';

class Header extends Component {
    constructor(props, context) {
        super(props, context)
    }
    handleAddTodo(event){
        let text = event.target.value.trim();
        console.log(text);
        if (event.which === 13) {
            this.props.actions.addTodo(text);
            event.target.value = '';
        } else if (event.which === 27) {
            event.target.value = '';
        }
    }
    handleToggleAll(event){
        this.props.actions.toggleAll(event.target.checked)
    }

    render(){
        let completedAll = this.props.todos.every(item => item.completed);
        return(
            <header id="header">
            <input
                type="checkbox"
                onChange={this.handleToggleAll.bind(this)}
                checked={completedAll}
                className="toggle-all"
                />
            <input
                type="text"
                placeholder="What's next?"
                onKeyUp={this.handleAddTodo.bind(this)}
                className="new-todo"
                />
            </header>

        )
    }
}

export default Header;