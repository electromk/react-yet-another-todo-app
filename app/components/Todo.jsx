import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            id: React.PropTypes.string,
            text: React.PropTypes.string
        };
    }

    render() {
        let {id, text} = this.props;

        return (
            <div>{id + ": " + text}</div>
        );
    }
}