import React from "react";
import '../css/main.css'

class FormBul extends React.Component{

    constructor(){
        super();
        this.state={
            name :"",
            email :"",
            contact: ""
        }
    }

    // updateName =(e)=>{
    //     this.setState({name:e.target.value});
    // }
    // updateEmail =(e)=>{
    //     this.setState({email:e.target.value});
    // }
    // updateContect =(e)=>{
    //     this.setState({contact:e.target.value});
    // }

    uniHand=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return(
            <>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={this.state.name} placeholder="Your name" onChange={(e)=>this.uniHand(e)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={this.state.email} placeholder="Enter Your Email" onChange={(e)=>this.uniHand(e)}/>
                </div>
                <div>
                    <label htmlFor="contact">contact</label>
                    <input type="tel" id="contact" name="contact" value={this.state.contact} placeholder="Enter Phone number" onChange={(e)=>this.uniHand(e)}/>
                </div>

                <button type="button" >Register </button>

            </form>
            


                {/* <input type="text" name="name"  placeholder="Your name"/>
                <input type="email" name="email"  placeholder="Enter your name"/>
                <input type="tel" name="contact"  placeholder="Enter your number here"/>
                <input type="button" name="s" value="register"/> */}
            </>
        )
    }
}
export default FormBul;