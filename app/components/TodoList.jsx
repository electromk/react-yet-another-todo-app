import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo.jsx';

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
        let {todos} = this.props;
        let renderTodos = () => {
            if(todos.length === 0) {
                return <p className="container__message">Nothing to do.</p>
            }

            return todos.map(t => <Todo key={t.id} {...t} />);
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {todos: state.todos}
    }
)(TodoList);