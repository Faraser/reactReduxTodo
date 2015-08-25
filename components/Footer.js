import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
};

class Footer extends Component {
    constructor(props, context) {
        super(props, context)
    }

    renderFilterLink(filter) {
        const title = FILTER_TITLES[filter];
        const { filter: selectedFilter, onShow } = this.props;

        return (
            <a className={classnames({ selected: filter === selectedFilter })}
               style={{ cursor: 'hand' }}
               onClick={() => onShow(filter)}>
                {title}
            </a>
        );
    }

    render() {
        let todosLeft = this.props.todos.filter(item => item.completed === false).length;
        let itemsLeftLabel = todosLeft === 1 ? " item left" : " items left";
        const { filter } = this.props;
        console.log('filter', filter);
        return (
            <footer className={this.props.todos.length > 0 ? 'footer': 'hide'}>
                <label className="todo-count">
                    {todosLeft}
                    {itemsLeftLabel}
                </label>
                <ul className="filters">
                    {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
                            (<li key={filter}>
                                {this.renderFilterLink(filter)}
                            </li>)
                    )}
                </ul>
                <a
                    onClick={this.props.actions.clearCompleted}
                    className="clear-completed"
                    >
                    {"Clear completed"}
                </a>
            </footer>
        )
    }
}


export default Footer;