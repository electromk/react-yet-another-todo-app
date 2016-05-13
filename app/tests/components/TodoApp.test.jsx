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
    })
});
