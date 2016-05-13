import React from 'react';

export default class SearchTodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    static get propTypes() {
        return {
            onSearch: React.PropTypes.func
        };
    }

    render() {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Filter ToDos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed ToDos
                    </label>
                </div>
            </div>
        );
    }

    handleSearch() {
        let searchText = this.refs.searchText.value;
        let showCompleted = this.refs.showCompleted.checked;

        this.props.onSearch(searchText, showCompleted);
    }
}