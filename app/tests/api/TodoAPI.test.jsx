import {expect} from 'chai';

import * as TodoAPI from '../../api/TodoAPI.jsx';

describe("Todo API Library", () => {
    beforeEach(() => {
        localStorage.removeItem(TodoAPI.TODOS_KEY);
    });

    it("should exist", () => {
        expect(TodoAPI).to.exist;
    });

    describe("getTodos", () => {
        it("should return empty array for bad local storage data", () => {
            expect(TodoAPI.getTodos()).to.eql([]);
        });

        it("should return valid array for bad correctly set storage data", () => {
            let todos = [{id: '1', text: 'something', completed: false}];
            localStorage.setItem(TodoAPI.TODOS_KEY, JSON.stringify(todos));

            expect(TodoAPI.getTodos()).to.eql(todos);
        });
    });

    describe("setTodos", () => {
        it("should set valid todos array", () => {
            let todos = [{id: '1', text: 'something', completed: false}];
            let returnedTodos = TodoAPI.setTodos(todos);
            let actualTodos = JSON.parse(localStorage.getItem(TodoAPI.TODOS_KEY));

            expect(returnedTodos).to.eql(todos);
            expect(actualTodos).to.eql(todos);
        });

        it("should not set invalid todos array", () => {
            let todos = {id: '1', text: 'something', completed: false};
            let returnedTodos = TodoAPI.setTodos(todos);
            let actualTodos = localStorage.getItem(TodoAPI.TODOS_KEY);

            expect(returnedTodos).to.be.undefined;
            expect(actualTodos).to.be.null;
        });

    });
});