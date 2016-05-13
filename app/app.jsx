import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp.jsx';

// Load Foundation
$(document).foundation();

// Load custom CSS
require('style!css!sass!./styles/app.scss');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);