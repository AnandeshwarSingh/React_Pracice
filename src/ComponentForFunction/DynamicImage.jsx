import { useState } from "react";

let DyanamicImage=()=>{
    let [image,setImages]=useState([])

    let [singleImage, setSingleImage] = useState("")

    let StoreImage=(e)=>{
        setSingleImage(e.target.value)
    }

    let StoreImageInArray=(e)=>{
        setImages([...image,singleImage])
    }
    return(
        <>
        <input type="text" name="singleImage" value={singleImage} onChange={(e)=>StoreImage(e)}/>
        <input type="button" name="s" value='Add new Image' onClick={(e)=>StoreImageInArray(e)}/> 
        {
            image.map((e)=>{
                return <div style={{padding:"20px", margin: "20px"}}>
                <image src={e} width="400px" />
                </div>
            })
        }
        </>
    )
}
export default DyanamicImage;