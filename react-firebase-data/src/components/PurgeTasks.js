import React from "react";

export default class PurgeClass extends React.Component {
    handleClick() {
        this.props.tasksRef.once("value", tasksSnapshot => {
            tasksSnapshot.forEach(taskSnapshot => {
                if(taskSnapshot.val().done) {
                    taskSnapshot.ref.remove();
                }
            })
        })
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}
                className="btn btn-primary">
                Purge Completed Tasks
            </button>
        )
    }
}