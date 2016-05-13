"use strict";

import $ from 'jquery';

export const TODOS_KEY = 'todos-data';

export function setTodos(todos) {
    if ($.isArray(todos)) {
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
        return todos;
    }
}

export function getTodos() {
    let todosString = localStorage.getItem(TODOS_KEY),
        todos = [];

    try {
        todos = JSON.parse(todosString)
    } catch (e) {}

    return $.isArray(todos) ? todos : [];
}