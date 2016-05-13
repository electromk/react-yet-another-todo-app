import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Load Foundation
$(document).foundation();

// Load custom CSS
require('style!css!sass!./styles/app.scss');

ReactDOM.render(
    <h1>App Boilerplate #3</h1>,
    document.getElementById('app')
);