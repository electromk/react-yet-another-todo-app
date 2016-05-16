import uuid from 'node-uuid';
import moment from 'moment';

export var searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
};

export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};

export var todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {id: uuid(), text: action.text, completed: false, createdAt: moment().unix(), completedAt: null}
            ];
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                        completedAt: !todo.completed ? moment().unix() : null
                    };
                }
                return todo;
            });
        default:
            return state;
    }
};