import { useState} from 'react';
import "./ModelSelection.css"

function Category({category, cat_index, handleModelSelection, }){

    const [show,setShow] = useState(false)

    function handleSetShow(){
        setShow(!show);
    }

    return(
     <>
        <button className="btn first" onClick={handleSetShow} style={{backgroundColor: show ? "#e74c3c":"transparent", color: show ? "white":"black"}}>{category.name}</button>
            {category.modelos.map((artifact,index) =>{
                return(
                    <>
                        {show && <button className="btn first sub" onClick={()=>{handleModelSelection({categoria:cat_index,modelo:index})}}>{artifact.name}</button>}
                    </>
                )
            }
            )} 
     </>   
    )
}

export default Category;