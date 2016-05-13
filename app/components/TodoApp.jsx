import React from 'react';
import TodoList from './TodoList.jsx';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    id: 1,
                    text: "Walk the dog"
                },
                {
                    id: 2,
                    text: "Learn React"
                },
                {
                    id: 3,
                    text: "Leave mail on porch"
                },
                {
                    id: 4,
                    text: "Have fun"
                }
            ]
        };
    }

    render() {
        let {todos} = this.state;

        return (
            <div>
                <h3>TodoApp Component.</h3>
                <TodoList todos={todos}/>
            </div>
        );
    }
}