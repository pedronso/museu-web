import { useState } from "react";
import "./ModelViewer.css"
import {jsonMock} from "./data2"

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
            </model-viewer>
        </div>
    );
}

export default ModelViewer;