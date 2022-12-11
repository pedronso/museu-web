import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import ModelViewer from './components/ModelViewer';
import Panel from './components/Panel';

function App() {

  const MUSEU_API_URL = "http://localhost:8080/museu/categorias";

    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [model, setModel] = useState({
      categoria:0,
      modelo:0
    });

    useEffect(() => {
		const fetchData = async () => {
      try{
        const response = await axios.get(
          MUSEU_API_URL
        );
          setDados(response.data);
          setError(null);
        }catch (err){
          setError(err.message);
          setDados(null);
          console.log(err);
        }finally{
          setLoading(false);
        }
		};
		fetchData();
	}, []);

  function handleModelSelection(selectedModel){
    const newModel = {
      categoria:selectedModel.categoria,
      modelo:selectedModel.modelo
    }
    setModel(newModel);
  }

  return (
    <div className="App">
      <div className="App-body">
        <Panel handleModelSelection={handleModelSelection} dados={dados} loading={loading} error={error}/>
      {!error && (
        <ModelViewer model={model} dados={dados}/>
        )}
      </div>
    </div>
  );
}

export default App;