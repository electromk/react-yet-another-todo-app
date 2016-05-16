import React from 'react';

import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import SearchTodoForm from './SearchTodoForm.jsx';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="page-title">ToDo App</h1>
                <div className="row">
                    <div className="columns small-centered small-11 medium-6 large-4">
                        <div className="container">
                            <SearchTodoForm/>
                            <TodoList/>
                            <AddTodoForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}