import "./ModelViewer.css";
import {jsonMock} from "./data"
import CompareRoundedIcon from '@mui/icons-material/CompareRounded';

function ModelViewer(props){

    // let model = props?.dados[props.model.categoria]?.modelos[props.model.modelo]
    let category = jsonMock[props.model.categoria]
    let model = category[props.model.modelo] 
    return(
        <>
            <div className="model-viewer-container">
                <model-viewer id = "viewer" src={model?.linkGLB} ar ar-modes="webxr scene-viewer quick-look" animation-name="StandUP" camera-controls touch-action="pan-y" shadow-intensity="2" shadow-softness="0" autoplay>
                <div id="content">
                    <div className="name">
                        {model?.name}
                    </div>
                    <div className="description">
                        {model?.description}
                    </div>
                </div>
                {/* poster = {model?.poster} */}
                </model-viewer>
            </div>
            <div className="toggle-poster" onClick={()=>{
                    if(document.getElementById("viewer").modelIsVisible===true){
                        console.log("is visible")
                        document.getElementById("viewer").poster = model?.poster
                        document.getElementById("viewer").showPoster()
                        document.getElementById("viewer").style.width = "60vw"
                        document.getElementById("content").style.display = "none"
                        
                    }else{
                        console.log("no visible")
                        document.getElementById("viewer").dismissPoster()
                        document.getElementById("viewer").style.width = "80vw"
                        document.getElementById("content").style.display = "block"
                    }
            }}><CompareRoundedIcon color={"action"}/></div>
        </>
    );
}

export default ModelViewer;