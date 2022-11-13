import { useState } from 'react';
import './App.css';
import ModelViewer from './components/ModelViewer';
import Panel from './components/Panel';
import { jsonMock } from './components/data2';

function App() {

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
      <div className="App-body">
        <Panel handleModelSelection={handleModelSelection}/>
        <ModelViewer model={model} />
        {/* <Button variant="outlined">aaa</Button> */}
      </div>
    </div>
  );
}

export default App;
