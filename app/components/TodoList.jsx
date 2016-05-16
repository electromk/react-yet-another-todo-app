import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo.jsx';
import * as TodoAPI from '../api/TodoAPI.jsx';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            todos: React.PropTypes.array
        };
    }

    render() {
        let {todos, showCompleted, searchText} = this.props;


        let renderTodos = () => {
            if (todos.length === 0) {
                return <p className="container__message">Nothing to do.</p>
            }

            return TodoAPI.filterTodos(todos, showCompleted, searchText).map(t => <Todo key={t.id} {...t} />);
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

export default connect((state) => state)(TodoList);