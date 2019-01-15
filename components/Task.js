import React from 'react';
import ReactDOM from 'react-dom';

class Task extends React.Component {
    render(){
        return (
            <div>
            <input type="checkbox" />
            <p>{this.props.task}</p>
        </div>
        );
    }

}
export default Task;