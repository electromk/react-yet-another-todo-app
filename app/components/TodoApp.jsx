import React from 'react';
import uuid from 'node-uuid';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import SearchTodoForm from './SearchTodoForm.jsx';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {id: uuid(), text: "Walk the dog", completed: false},
                {id: uuid(), text: "Learn React", completed: true},
                {id: uuid(), text: "Leave mail on porch", completed: false},
                {id: uuid(), text: "Have fun", completed: true}
            ]
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    render() {
        let {todos} = this.state;

        return (
            <div className="row">
                <div className="columns small-centered medium-6 large-4">
                    <SearchTodoForm onSearch={this.handleSearch}/>
                    <TodoList todos={todos} onToggle={this.handleToggle}/>
                    <AddTodoForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
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