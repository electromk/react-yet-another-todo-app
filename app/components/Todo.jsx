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
        let {id, text, completed} = this.props;

        return (
            <div onClick={() => {
                this.props.onToggle(id)
            }}>
                <label>
                    <input type="checkbox" defaultChecked={completed}/>
                    {text}
                </label>
            </div>
        );
    }
}