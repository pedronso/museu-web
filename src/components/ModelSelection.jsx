import { useState } from "react";
import "./ModelSelection.css"
import {jsonMock} from "./data"

function ModelSelection({handleModelSelection}){

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    
    function handleClick1(){
        setShow1(!show1);
        setShow2(false);
        setShow3(false);
        setShow4(false);
    }

    function handleClick2(){
        setShow2(!show2);
        setShow1(false);
        setShow3(false);
        setShow4(false);
    }

    function handleClick3(){
        setShow3(!show3);
        setShow1(false);
        setShow2(false);
        setShow4(false);
    }

    function handleClick4(){
        setShow4(!show4);
        setShow1(false);
        setShow2(false);
        setShow3(false);
    }

    return(
        <div className="container">
            <button className="btn first" onClick={handleClick1} style={{backgroundColor: show1 ? "#e74c3c":"white", color: show1 ? "white":"black"}}>Categoria 1</button>
                {show1 && <button onClick={()=>handleModelSelection(0)} className="btn first sub" >{jsonMock.names[0]}</button>}
            <button className="btn first" onClick={handleClick2} style={{backgroundColor: show2 ? "#e74c3c":"white"}}>Categoria 2</button>
                {show2 && <button onClick={()=>handleModelSelection(1)} className="btn first sub" >{jsonMock.names[1]}</button>}
                {show2 && <button onClick={()=>handleModelSelection(2)} className="btn first sub" >{jsonMock.names[2]}</button>}
            <button className="btn first" onClick={handleClick3} style={{backgroundColor: show3 ? "#e74c3c":"white"}}>Categoria 3</button>
                {show3 && <button onClick={()=>handleModelSelection(3)} className="btn first sub" >{jsonMock.names[3]}</button>}
            <button className="btn first" onClick={handleClick4} style={{backgroundColor: show4 ? "#e74c3c":"white"}}>Categoria 4</button>
                {show4 && <button onClick={()=>handleModelSelection(4)} className="btn first sub" >{jsonMock.names[4]}</button>}
        </div>
    );
}

export default ModelSelection;