import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import chai, {expect} from 'chai';
import chaiSpies from 'chai-spies';

chai.use(chaiSpies);

// Component under test.
import {AddTodoForm} from '../../components/AddTodoForm.jsx';

describe("AddTodoForm component", () => {
    it("should exist", () => {
        expect(AddTodoForm).to.exist;
    });

    it("should dispatch ADD_TODO when valid data entered", () => {
        let spy = chai.spy(),
            text = 'do something',
            action = {type: 'ADD_TODO', text: text},
            addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>),
            $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todoText.value = text;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).to.have.been.called.with(action);
    });

    it("should not dispatch ADD_TODO if no data or whitespace only entered", () => {
        let spy = chai.spy(),
            addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>),
            $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todoText.value = '  ';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).to.not.have.been.called();
    });
});