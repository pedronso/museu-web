import { useState } from "react";
import "./ModelViewer.css"
import {jsonMock} from "./data2"
import CompareRoundedIcon from '@mui/icons-material/CompareRounded';

function ModelViewer(props){
    
    
    let category = jsonMock[props.model.categoria]
    let model = category[props.model.modelo] 

    // console.log(model)

    return(
        <div className="model-viewer-container">
            <model-viewer id = "viewer" src={model.linkGLB} ar ar-modes="webxr scene-viewer quick-look" animation-name="StandUP" camera-controls touch-action="pan-y" shadow-intensity="2" poster = {model.poster} autoplay>
            <div className="content">
                <div className="name">
                    {model.name}
                </div>
                <div className="description">
                    {model.description}
                </div>
            </div>
            <div className="toggle-poster" onClick={()=>{
                document.getElementById("viewer").modelIsVisible ? document.getElementById("viewer").showPoster() : document.getElementById("viewer").dismissPoster() 
                
                // if(document.getElementById("viewer").modelIsVisible==true){
                //     console.log("is visible")
                //     document.getElementById("viewer").showPoster()
                // }else{
                //     console.log("no visible")
                //     document.getElementById("viewer").dismissPoster()

                // }
            }}><CompareRoundedIcon color={"action"}/></div>
            </model-viewer>
        </div>
    );
}

export default ModelViewer;