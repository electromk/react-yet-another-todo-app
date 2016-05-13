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
        let renderTodos = () => {
            if(todos.length === 0) {
                return <p className="container__message">Nothing to do.</p>
            }

            return todos.map(t => <Todo key={t.id} {...t} onToggle={onToggle}/>);
        };


        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}