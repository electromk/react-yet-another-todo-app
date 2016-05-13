import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import {expect} from 'chai';

// Component under test.
import TodoList from '../../components/TodoList.jsx';
import Todo from '../../components/Todo.jsx';

describe('TodoList component', () => {
    it('should exist', () => {
        expect(TodoList).to.exist;
    });

    it("should render one Todo component for each todo item", () => {
        let data = [
            {id: 1, text: 'todo 1'},
            {id: 2, text: 'todo 2'}
        ];

        let todoList = TestUtils.renderIntoDocument(<TodoList todos={data}/>);
        let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).to.be.equal(data.length);
    });
});
