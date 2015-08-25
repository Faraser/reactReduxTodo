import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, TOGGLE_ALL, CLEAR_COMPLETED} from '../constants/ActionTypes';

const initialState = [{
    text: 'Use Redux',
    completed: false,
    id: 0
}];

export default function todos(state = initialState, action = null) {
    switch (action.type) {
        case ADD_TODO:
            return [{
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                completed: false,
                text: action.text
            }, ...state];
        case DELETE_TODO:
            return state.filter(item => item.id !== action.id);
        case EDIT_TODO:
            return state.map(item =>
                item.id === action.id ?
                    Object.assign({}, item, {text: action.text }) :
                    item);
        case TOGGLE_TODO:
            return state.map(item =>
                item.id === action.id ?
                    Object.assign({}, item, {completed: !item.completed}):
                item);
        case TOGGLE_ALL:
            return state.map(item => Object.assign({}, item, {completed: action.checked}));
        case CLEAR_COMPLETED:
            return state.filter(item => item.completed === false);
        default:
            return state
    }
}