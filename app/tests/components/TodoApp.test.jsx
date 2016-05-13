import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

// Component under test.
import TodoApp from '../../components/TodoApp.jsx';

describe('TodoApp component', () => {
    it('should exist', () => {
        expect(TodoApp).to.exist;
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        let text = 'Write tests.',
            todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(text);

        expect(todoApp.state.todos[0].text).to.be.equal(text);
    });

    it('should toggle completed status when handleToggle is called', () => {
        let todoData = {id: '11', text: 'test feature', completed: false},
            todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: [todoData]});
        expect(todoApp.state.todos[0].completed).to.be.false;
        todoApp.handleToggle('11');
        expect(todoApp.state.todos[0].completed).to.be.true;
    });
});
