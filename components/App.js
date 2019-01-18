import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import Nav from './Nav';
import toDoData from '../toDoData';
class App extends React.Component {
constructor(){
    super();
    this.state = {
        isLoggedIn: false,
        todoData: toDoData,
        count: null
    };

}

componentDidMount(){
    this.setState({count: this.state.todoData.length});
};

logFunction = () => {
   if(this.state.isLoggedIn){
       this.setState({isLoggedIn: false});
   }
   if(!this.state.isLoggedIn){
       this.setState({isLoggedIn: true});
   }

}


checkHandler = (id) => {
// console.log("checked id",id);
    this.setState(prevState => {
        const updatedTodos = prevState.todoData.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        });
        return {
            todoData: updatedTodos
        }
    });
    };

    render(){
        let firstname = 'drew';
        let lastname = "harper";

        let data = this.state.todoData.map(item => <Task
        key={item.id}
        checkHandler={this.checkHandler}
        item={item} /> );

        return(
            <div>
          <h1 style={{color: 'blue'}}>ToDo APP</h1>
            <Nav {...this.state} logFunction={this.logFunction} />
            <h4>{!this.state.isLoggedIn ? "Welcome" : "Thanks for Loggin In"}</h4>
             <p>Total tasks - {this.state.count}</p>
        <h3>{`${firstname} ${lastname}`}</h3>
            <div>
        {data}

</div>
           </div>
        );
    }
}

export default App;