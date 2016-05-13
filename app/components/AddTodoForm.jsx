import React from 'react';

export default class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    static get propTypes() {
        return {
            onAddTodo: React.PropTypes.func
        }
    }

    render() {
        return (
            <div>
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

        let {onAddTodo} = this.props;
        onAddTodo(todoText);
    }
};