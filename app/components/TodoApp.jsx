import React from 'react';
import uuid from 'node-uuid';

import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import SearchTodoForm from './SearchTodoForm.jsx';
import * as TodoAPI from '../api/TodoAPI.jsx';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    render() {
        let {todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div className="row">
                <div className="columns small-centered medium-6 large-4">
                    <SearchTodoForm onSearch={this.handleSearch}/>
                    <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                    <AddTodoForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    }

    handleAddTodo(text) {
        this.setState({
            todos: [...this.state.todos, {id: uuid(), text: text, completed: false}]
        });
    }

    handleSearch(searchText, showCompleted) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    handleToggle(id) {
        let updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = ! todo.completed;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    }
}