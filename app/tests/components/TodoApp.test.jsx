import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';
import {expect} from 'chai';

// Component under test.
import TodoApp from '../../components/TodoApp.jsx';
import TodoList from '../../components/TodoList.jsx';
import store from '../../store/store.jsx';

describe('TodoApp component', () => {
    it('should exist', () => {
        expect(TodoApp).to.exist;
    });

    it("should render TodoList", () => {
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp/>
            </Provider>
        );

        let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).to.equal(1);
    });
});
