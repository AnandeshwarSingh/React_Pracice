import React from "react";



class StateVar extends React.Component{

    constructor(){
        super();
        this.state={
            count : 0
        }
    }

    incValByOne=()=>{
        this.setState({ 
            count:this.state.count+1
         });
    }
    render(){
        return(

            <>
                <h1> Count Value {this.state.count} </h1>
                <input type="button" name="s" value="hit me "  onClick={this.incValByOne}/>
            </>
        )
    }
}
export default StateVar;