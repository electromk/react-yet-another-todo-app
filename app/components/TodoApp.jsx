import React from 'react';
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
                {id: 1, text: "Walk the dog"},
                {id: 2, text: "Learn React"},
                {id: 3, text: "Leave mail on porch"},
                {id: 4, text: "Have fun"}
            ]
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    render() {
        let {todos} = this.state;

        return (
            <div className="row">
                <div className="columns small-centered medium-6 large-4">
                    <SearchTodoForm onSearch={this.handleSearch}/>
                    <TodoList todos={todos}/>
                    <AddTodoForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }

    handleAddTodo(text) {
        alert("New todo received " + text);
    }

    handleSearch(searchText, showCompleted) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
}