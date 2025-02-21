import React from "react";

class B extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <h1>Message from App Compinenet {this.props.nameB}</h1>
            </>
        )
    }
}

export default B;