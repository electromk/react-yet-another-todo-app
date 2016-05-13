import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
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
});
