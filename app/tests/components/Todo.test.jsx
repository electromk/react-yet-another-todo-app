import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import {expect} from 'chai';

// Component under test.
import Todo from '../../components/Todo.jsx';

describe('Todo component', () => {
    it('should exist', () => {
        expect(Todo).to.exist;
    })
});
