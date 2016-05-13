import React from 'react';
import Todo from './Todo.jsx';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            todos: React.PropTypes.array,
            onToggle: React.PropTypes.func
        };
    }

    render() {
        let {todos, onToggle} = this.props;

        return (
            <div>
                {todos.map(t => <Todo key={t.id} {...t} onToggle={onToggle}/>)}
            </div>
        );
    }
}