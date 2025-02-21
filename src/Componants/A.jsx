import React from "react";

class A extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <h1>Message from App Componenet {this.props.nameA}</h1>
            </>
        )
    }
}

export default A;