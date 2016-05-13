import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai, {expect} from 'chai';
import chaiSpies from 'chai-spies';

chai.use(chaiSpies);

// Component under test.
import SearchTodoForm from '../../components/SearchTodoForm.jsx';

describe("SearchTodoForm component", () => {
    it("should exist", () => {
        expect(SearchTodoForm).to.exist;
    });

    it("should call onSearch with entered input data", () => {
        let spy = chai.spy(),
            searchText = 'do',
            searchTodoForm = TestUtils.renderIntoDocument(<SearchTodoForm onSearch={spy}/>);

        searchTodoForm.refs.searchText.value = searchText;
        TestUtils.Simulate.change(searchTodoForm.refs.searchText);

        expect(spy).to.have.been.called.with(searchText, false);
    });

    it("should call onSearch with proper checked value of 'show completed'", () => {
        let spy = chai.spy(),
            searchTodoForm = TestUtils.renderIntoDocument(<SearchTodoForm onSearch={spy}/>);

        searchTodoForm.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(searchTodoForm.refs.showCompleted);

        expect(spy).to.have.been.called.with('', true);
    });
});