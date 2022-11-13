import { useState} from 'react';
import {jsonMock} from "./data2"
import "./ModelSelection.css"

function Category(props){

    const [show,setShow] = useState(false)

    function handelSetShow(){
        setShow(!show);
    }

    return(
     <>
        <button className="btn first" onClick={handelSetShow} style={{backgroundColor: show ? "#e74c3c":"white", color: show ? "white":"black"}}>{props.name}</button>
            {jsonMock[props.name].map((artifact,index) =>{
                return(
                    <>
                        {show && <button className="btn first sub" onClick={()=>{props.handleModelSelection({categoria:props.name,modelo:index})}}>{artifact.name}</button>}
                    </>
                )
            }
            )} 
     </>   
    )
}

export default Category;