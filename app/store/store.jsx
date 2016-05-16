import * as redux from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from '../reducers/reducers.jsx';

export function configure(initialState = {}) {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    return redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}

export default configure();