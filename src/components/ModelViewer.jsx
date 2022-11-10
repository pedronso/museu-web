import { useState } from "react";
import "./ModelViewer.css"
import {jsonMock} from "./data"

function ModelViewer(props){

    let path = jsonMock.linksGLB[props.index];
    let pathImg = jsonMock.posters[props.index];
    
    return(
        <div className="container">
            <model-viewer src={path} ar ar-modes="webxr scene-viewer quick-look" animation-name="StandUpAim" camera-controls shadow-intensity="2" poster = {pathImg} autoplay/>
            <div className="content">
                <div className="name">
                    {jsonMock.names[props.index]}
                </div>
                <div className="description">
                    {jsonMock.descriptions[props.index]}
                </div>
            </div>
        </div>
    );
}

export default ModelViewer;