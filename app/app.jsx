import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './components/TodoApp.jsx';
import store from './store/store.jsx';
import * as actions from './actions/actions.jsx';
import * as TodoAPI from './api/TodoAPI.jsx';

store.subscribe(() => {
    let state = store.getState();
    console.log('New State:', state);
    TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load Foundation
$(document).foundation();

// Load custom CSS
require('style!css!sass!./styles/app.scss');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);