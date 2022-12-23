import { useState} from 'react';
import {jsonMock} from "./data"
import "./ModelSelection.css"

function Category({category, cat_index, handleModelSelection, }){

    const [show,setShow] = useState(false)

    function handleSetShow(){
        setShow(!show);
    }

    return(
     <>
        <button className="btn first" onClick={handleSetShow} style={{backgroundColor: show ? "#e74c3c":"transparent", color: show ? "white":"black"}}>{category}</button>
            {jsonMock[category].map((artifact,index) =>{
                return(
                    <>
                        {show && <button className="btn first sub" onClick={()=>{handleModelSelection({categoria:category,modelo:index})}}>{artifact.name}</button>}
                    </>
                )
            }
            )} 
     </>   
    )
}

export default Category;