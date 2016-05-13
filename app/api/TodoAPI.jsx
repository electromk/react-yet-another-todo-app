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

export function filterTodos(todos, showCompleted, searchText) {
    let results = todos;

    // Filter by showCompleted
    results = results.filter(todo => {
        return !todo.completed || showCompleted;
    });

    // Filter by searchText
    if(searchText.length > 0) {
        results = results.filter(todo => {
            return todo.text.toLowerCase().indexOf(searchText) >= 0;
        });
    }

    // Sort with non-completed first
    results.sort((a, b) => {
        if(! a.completed && b.completed) {
            return -1;
        } else if(a.completed && !b.completed) {
            return 1;
        }
        return 0;
    });

    return results;
}