import React from "react";

class Marks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mroll:this.props.roll
        }
    }

    static getDerivedStateFromProps(props, state) { 
        if(props.rool!==state.mroll){
            return{
                mroll: props.roll
            }
        }
     }

     shouldComponentUpdate(nextProps,nextStae){
        if(this.state.mroll<107){
            return true;
        }else{
            return false;
        }
     }
    render(){
        
        return(
            <>
                <h1>I am marks componenet{this.state.mroll} </h1>
                
                <h1>Prop value from marks componenet {this.props.roll}</h1>
            </>
        )
    }

    getSnapshotBeforeUpdate(prevProp, prevStae){
        console.log("Befoure update prop and state");
        console.log(prevProp);
        console.log(prevStae);
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => { 
        console.log("Componenet Did update method executed");
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);

     };

}
export default Marks;