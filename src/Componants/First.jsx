import React from 'react';

class First extends React.Component{

    handlerfun=()=>{
        alert("Hello I am Anandeshwar Singh")
    }
    render(){
        return(
            <>
                <input style={{height:"40px", width:"350px", marginTop:"80px", borderRadius:"5px", border:"none"}} type='button' name='s' value='click me' onClick={this.handlerfun}/>
            </>
        )
    }
}

export default First;
