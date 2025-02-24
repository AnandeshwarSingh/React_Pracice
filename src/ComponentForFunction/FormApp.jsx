import { useState } from "react";

const FormApp=()=>{
    let [reg,setReg] = useState({
        name:"",
        email:"",
        contact:""
    })

    let uniHandler=(e)=>{
        setReg({[e.target.name]:e.target.value})
    }

    return(
        <>
        <div>
        <input type="text" name="name" value={reg.name} onChange={(e)=>uniHandler(e)} />
        </div>
        <div>
        <input type="email" name="email" value={reg.email} onChange={(e)=>uniHandler(e)}/>
        </div>
        <div>
        <input type="tel" name="contact" value={reg.contact} onChange={(e)=>uniHandler(e)}/>
        </div>
        <div>
        <input type="submit" name="s" value='Register'/>
        </div>
            
            
            
            
        </>
    )

}
export default FormApp;