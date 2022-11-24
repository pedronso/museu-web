import { height } from "@mui/system";
import { useRef } from "react";
import "./Video.css";

function Video(){

    const videoEl = useRef(null);

    const handleLoadedMetadata = () => {
        const video = videoEl.current;
        if (!video) return;
        video.currentTime = 30;
        console.log(`The video is ${video.duration} seconds long.`);
        console.log(`The video progress is ${video.currentTime} seconds.`);

      };
      
    // {console.log(window.setHeight)}
    return(
        <>

            <div id="set-height" style={{height:"13000px", backgroundColor:"black"}} onClick={handleLoadedMetadata} onScroll={()=>{console.log("scroll")}}></div>
            <div id="time"></div>
            <div id="scroll"></div>
            <div className="container">
                <video id="player" tabIndex="0" autobuffer="autobuffer" preload="preload" controls ref={videoEl} onClick={handleLoadedMetadata}>
                    {/* <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="src/videoplayback.mp4"></source> */}
                    <source type="video/mp4;  codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="./museu.mp4"></source>
                    {/* <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="vid2.ogv"></source> */}
                    
                    <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
                </video>
            </div>
            <button className="btn" onClick={handleLoadedMetadata}>click</button>
        </>
    )
}

export default Video;