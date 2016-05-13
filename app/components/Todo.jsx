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
        let todoClassName = completed ? 'todo todo-completed' : 'todo';
        let renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
        };

        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id)
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
}