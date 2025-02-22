import React from "react";

import Marks from "./Marks";
class Student extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            rollno:101,
        }
    }
    handleClick = () =>{
        this.setState({
            rollno: this.state.rollno+1
        })
    }

    render(){
        return(
            <>
            <h1>I am student componenet</h1>
            <h1>Roll number is : {this.state.rollno}</h1>
            <Marks roll={this.state.rollno}/>
            <input type="button" name="s" value="Change Count value" onClick={this.handleClick}/>
            </>
        )
    }

}

export default Student;