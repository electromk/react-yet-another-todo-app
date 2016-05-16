import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

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
    }

    render() {
        let {todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className="page-title">ToDo App</h1>
                <div className="row">
                    <div className="columns small-centered small-11 medium-6 large-4">
                        <div className="container">
                            <SearchTodoForm onSearch={this.handleSearch}/>
                            <TodoList/>
                            <AddTodoForm onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    }

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {id: uuid(), text: text, completed: false, createdAt: moment().unix(), completedAt: null}
            ]
        });
    }

    handleSearch(searchText, showCompleted) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
}