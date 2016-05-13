import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            id: React.PropTypes.number,
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