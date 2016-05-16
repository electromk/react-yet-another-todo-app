import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './components/TodoApp.jsx';
import * as actions from './actions/actions.jsx';
import store from './store/store.jsx';

store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('do something cool'));
store.dispatch(actions.setSearchText('work'));
store.dispatch(actions.toggleShowCompleted());

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