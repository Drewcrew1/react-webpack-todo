import React from 'react';
import ReactDOM from 'react-dom';


class Nav extends React.Component{

    // logFunction = () => {
    //     console.log(this.props);
    // }



    render(){

    //<h2>You are logged{this.props.state.isLoggedIn === false ? " Out" : " In"}</h2>
        return (
                <div>
            <button  onClick={this.props.logFunction}>{this.props.isLoggedIn ? "Log out" : "Log In"}</button>

            </div>
        );
    }
}
    export default Nav;