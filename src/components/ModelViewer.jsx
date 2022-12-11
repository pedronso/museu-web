import "./ModelViewer.css";
import CompareRoundedIcon from '@mui/icons-material/CompareRounded';

function ModelViewer(props){

    let model = props?.dados[props.model.categoria]?.modelos[props.model.modelo]
    return(
        <div className="model-viewer-container">
            <model-viewer id = "viewer" src={model?.linkGLB} ar ar-modes="webxr scene-viewer quick-look" animation-name="StandUP" camera-controls touch-action="pan-y" shadow-intensity="2" poster = {model?.poster} autoplay>
            <div id="content">
                <div className="name">
                    {model?.name}
                </div>
                <div className="description">
                    {model?.description}
                </div>
            </div>
            <div className="toggle-poster" onClick={()=>{
                if(document.getElementById("viewer").modelIsVisible===true){
                    console.log("is visible")
                    document.getElementById("viewer").showPoster()
                    document.getElementById("content").style.display = "none"
                }else{
                    console.log("no visible")
                    document.getElementById("viewer").dismissPoster()
                    document.getElementById("content").style.display = "block"
                }
            }}><CompareRoundedIcon color={"action"}/></div>
            </model-viewer>
        </div>
    );
}

export default ModelViewer;