import React from "react";

class Mount extends React.Component{

    constructor(Props){
        super()
        this.state={
            count:100
        }
        console.log("I am a constructor");
    }

    static getDerivedStateFromProps(props, state) { 
        console.log("I am getDriver state from props");
     }

    render(){
        console.log("I am render method")
        return(
            <>
            <h1> I am render method</h1>
            </>
        );
    }

    componentDidMount(){
        console.log("I am component did mount");
    }



}
export default Mount;