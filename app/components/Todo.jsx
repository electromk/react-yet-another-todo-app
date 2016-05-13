import React from 'react';
import moment from 'moment';

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
        let {id, text, completed, createdAt, completedAt} = this.props;
        let renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;

            if(completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }
            
            return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
        };

        return (
            <div onClick={() => {
                this.props.onToggle(id)
            }}>
                <label>
                    <input type="checkbox" defaultChecked={completed}/>
                    {text}
                </label>
                {renderDate()}
            </div>
        );
    }
}