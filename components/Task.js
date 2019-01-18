import React from 'react';
import ReactDOM from 'react-dom';
import toDoData from '../toDoData';

class Task extends React.Component{
render(){
        return (
            <div>
            <input type="checkbox"
        onChange={() => this.props.checkHandler(this.props.item.id)}
    checked={this.props.item.completed} />

            <p>{this.props.item.text}</p>
        </div>
        );

}
}

export default Task;