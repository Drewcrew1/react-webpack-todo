import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
class App extends React.Component {

    render(){
        let firstname = 'drew';
        let lastname = "harper";
        return(
            <div>
          <h1 style={{color: 'blue'}}>ToDo APP</h1>
            <h3>{`${firstname} ${lastname}`}</h3>
            <div>
            <Task task="Study" />
            <Task task="Learn" />
            <Task task="Code" />
</div>
           </div>
        );
    }
}

export default App;