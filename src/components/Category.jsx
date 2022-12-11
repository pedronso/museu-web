import { useState} from 'react';
import "./ModelSelection.css"

function Category(props){

    const [show,setShow] = useState(false)

    function handleSetShow(){
        setShow(!show);
    }

    return(
     <>
        <button className="btn first" onClick={handleSetShow} style={{backgroundColor: show ? "#e74c3c":"white", color: show ? "white":"black"}}>{props.category.name}</button>
            {props.category.modelos.map((artifact,index) =>{
                return(
                    <>
                        {show && <button className="btn first sub" onClick={()=>{props.handleModelSelection({categoria:props.cat_index,modelo:index})}}>{artifact.name}</button>}
                    </>
                )
            }
            )} 
     </>   
    )
}

export default Category;