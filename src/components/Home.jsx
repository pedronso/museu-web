import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./Home.css"

function Home(){
    return(
        <>
        <div className="home-container">
            <h1 className="home-title">Bem vindo ao museu virtual!</h1>
            <div className="pages">
                <a className="home-btn first" href="museu.html">Visita interativa</a>
                <Link to="/acervo" className="home-btn first">Acervo virtual</Link>
            </div>
        </div>
        </>
    )
}

export default Home;