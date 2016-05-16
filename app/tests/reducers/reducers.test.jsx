import {expect} from 'chai';
import df from 'deep-freeze-strict';

import * as reducers from '../../reducers/reducers.jsx';

describe("Reducers", () => {
    describe("searchTextReducer", () => {
        it("should set searchText on SET_SEARCH_TEXT action", () => {
            let action = {type: 'SET_SEARCH_TEXT', searchText: 'something'};
            let result = reducers.searchTextReducer(df(''), df(action));

            expect(result).to.equal(action.searchText);
        });
    });

    describe("showCompletedReducer", () => {
        it("should flip the showCompleted status on TOGGLE_SHOW_COMPLETED action", () => {
            let action = {type: 'TOGGLE_SHOW_COMPLETED'};
            let result = reducers.showCompletedReducer(df(false), df(action));

            expect(result).to.be.true;
        });
    });

    describe("todosReducer", () => {
        it("should add todo to the list on ADD_TODO action", () => {
            let action = {type: "ADD_TODO", text: 'do something'};
            let result = reducers.todosReducer(df([]), df(action));

            expect(result.length).to.equal(1);
            expect(result[0].text).to.equal(action.text);
        });

        it("should toggle todo's completed status and update completedAt on TOGGLE_TODO action", () => {
            let todos = [
                {id: '1', text: 'do something', completed: false, createdAt: 111, completedAt: null},
                {id: '2', text: 'do something else', completed: true, createdAt: 112, completedAt: 113}
            ];
            let action1 = {type: 'TOGGLE_TODO', id: '1'};
            let action2 = {type: 'TOGGLE_TODO', id: '2'};

            let result = reducers.todosReducer(df(todos), df(action1));
            expect(result[0].completed).to.be.true;
            expect(result[0].completedAt).to.not.be.null;

            result = reducers.todosReducer(df(todos), df(action2));
            expect(result[1].completed).to.be.false;
            expect(result[0].completedAt).to.be.null;
        });

        it("should add existing todos to the list on ADD_TODOS action", () => {
            let todos = [
                {id: '1', text: 'do something', completed: false, createdAt: 111, completedAt: null},
                {id: '2', text: 'do something else', completed: true, createdAt: 112, completedAt: 113}
            ];
            let action = {type: 'ADD_TODOS', todos};

            let result = reducers.todosReducer(df([]), df(action));

            expect(result.length).to.equal(2);
            expect(result[0]).to.eql(todos[0]);
            expect(result[1]).to.eql(todos[1]);
        });
    });
});