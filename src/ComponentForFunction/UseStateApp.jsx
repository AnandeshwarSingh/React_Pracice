import React, { useState } from "react"

let UseStateApp = ()=>{
    let [count,setCount] = useState(0);

    let increaseCount=()=>{
        setCount(count+1);
    }
    return(
        <>
        <h1>Counter value is {count}</h1>
        <input type="button" name="s" value='Increase Count by 1' onClick={increaseCount} />
        </>
        
    )
}
export default UseStateApp