import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import {expect} from 'chai';

// Component under test.
import ConnectedTodoList, {TodoList} from '../../components/TodoList.jsx';
import ConnectedTodo from '../../components/Todo.jsx';
import {configure} from '../../store/store.jsx';

describe('TodoList component', () => {
    it('should exist', () => {
        expect(TodoList).to.exist;
    });

    it("should render one Todo component for each todo item", () => {
        let data = [
            {id: '1', text: 'todo 1', completed: false, completedAt: null, createdAt: 500},
            {id: '2', text: 'todo 2', completed: false, completedAt: null, createdAt: 500}
        ];
        let store = configure({todos: data});

        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todoComponents.length).to.equal(data.length);
    });

    it("should render empty message if no todos", () => {
        let data = [];

        let todoList = TestUtils.renderIntoDocument(<TodoList todos={data}/>);
        let $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).to.equal(1);
    });
});
