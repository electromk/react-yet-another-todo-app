import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';

export class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button hollow expanded">Add</button>
                </form>
            </div>
        );
    }

    onFormSubmit(e) {
        e.preventDefault();

        let todoText = this.refs.todoText.value.trim();
        this.refs.todoText.value = '';

        if(todoText.length === 0) {
            this.refs.todoText.focus();
            return;
        }

        this.props.dispatch(actions.addTodo(todoText));
    }
}

export default connect()(AddTodoForm);