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

    describe("filterTodos", () => {
        let todos = [
            {id: '1', text: 'something', completed: true},
            {id: '2', text: 'something Else', completed: false},
            {id: '3', text: 'something else #2', completed: true}
        ];

        it("should return all todos if showCompleted is set to true", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).to.be.equal(3);
        });
        
        it("should show only not completed todos if showCompleted is set to false", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).to.be.equal(1);
            expect(filteredTodos[0].completed).to.be.false;
        });

        it("should sort the todos so not completed appear first", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).to.be.false;
        });

        it("should filter todos by specified searchText", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'else');
            expect(filteredTodos.length).to.be.equal(2);
        });

        it("should return all todos if empty searchText is passed", () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).to.be.equal(3);
        });
    });
});