import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import chai, {expect} from 'chai';
import chaiSpies from 'chai-spies';

chai.use(chaiSpies);

// Component under test.
import Todo from '../../components/Todo.jsx';

describe('Todo component', () => {
    it('should exist', () => {
        expect(Todo).to.exist;
    });

    it('should call onToggle prop with ID on click', () => {
        let todoData = {id: '11', text: 'test feature', completed: false},
            spy = chai.spy(),
            todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>),
            $el = $(ReactDOM.findDOMNode(todo));
        
        TestUtils.Simulate.click($el[0]);

        expect(spy).to.be.called.with('11');
    });
});
