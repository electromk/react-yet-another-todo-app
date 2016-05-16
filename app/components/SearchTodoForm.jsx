import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';

export class SearchTodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {dispatch, showCompleted, searchText} = this.props;

        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Filter ToDos" value={searchText} onChange={() => {
                        let searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText))
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show completed ToDos
                    </label>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        };
    }
)(SearchTodoForm);