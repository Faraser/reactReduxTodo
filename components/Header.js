import React, { Component, PropTypes } from 'react';

class Header extends Component {
    constructor(props, context) {
        super(props, context)
    }
    handleAddTodo(event){
        let text = event.target.value.trim();
        console.log(text);
        if (event.which === 13) {
            this.props.addTodo(text);
            event.target.value = '';
        } else if (event.which === 27) {
            event.target.value = '';
        }
    }
    render(){
        return(
            <input
                type="text"
                placeholder="What's next?"
                onKeyUp={this.handleAddTodo.bind(this)}
                />

        )
    }
}

export default Header;