import {expect} from 'chai';

import * as actions from '../../actions/actions.jsx';

describe("Actions", () => {
    it("should generate setSearchText action", () => {
        let expectedAction = {type: "SET_SEARCH_TEXT", searchText: "some text"};
        let actualAction = actions.setSearchText(expectedAction.searchText);

        expect(actualAction).to.eql(expectedAction);
    });

    it("should generate addTodo action", () => {
        let expectedAction = {type: "ADD_TODO", text: "some todo"};
        let actualAction = actions.addTodo(expectedAction.text);

        expect(actualAction).to.eql(expectedAction);
    });

    it("should generate toggleTodo action", () => {
        let expectedAction = {type: "TOGGLE_TODO", id: "1"};
        let actualAction = actions.toggleTodo(expectedAction.id);

        expect(actualAction).to.eql(expectedAction);
    });

    it("should generate toggleShowCompleted action", () => {
        let expectedAction = {type: "TOGGLE_SHOW_COMPLETED"};

        expect(actions.toggleShowCompleted()).to.eql(expectedAction);
    });
});