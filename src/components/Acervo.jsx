import axios from 'axios';
import { useEffect } from 'react';
import {jsonMock} from "./data"
import { useState } from 'react';
import './Acervo.css';
import ModelViewer from './ModelViewer';
import Panel from './Panel';

function App() {

  // const MUSEU_API_URL = "http://localhost:8080/museu/categorias";

  //   const [dados, setDados] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  //   const [model, setModel] = useState({
  //     categoria:0,
  //     modelo:0
  //   });

  //   useEffect(() => {
	// 	const fetchData = async () => {
  //     try{
  //       const response = await axios.get(
  //         MUSEU_API_URL
  //       );
  //         setDados(response.data);
  //         setError(null);
  //       }catch (err){
  //         setError(err.message);
  //         setDados(null);
  //         console.log(err);
  //       }finally{
  //         setLoading(false);
  //       }
	// 	};
	// 	fetchData();
	// }, []);

  const [model, setModel] = useState({
    categoria:Object.keys(jsonMock)[0],
    modelo:0
  });

  function handleModelSelection(selectedModel){
    const newModel = {
      categoria:selectedModel.categoria,
      modelo:selectedModel.modelo
    }
    setModel(newModel);
  }

  return (
    <div className="App">
      <div id="screen">
        <div className="App-body">
          <Panel handleModelSelection={handleModelSelection}/>
            <ModelViewer model={model}/>
        </div>
      </div>
      <div id="turn">
        <h1>Por favor, gire seu aparelho</h1>
        <img src="./rotate_black.gif" alt=""/>
      </div>
    </div>
  );
}

export default App;