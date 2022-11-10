import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';
import ModelViewer from './components/ModelViewer';
import Panel from './components/Panel';

function App() {

  const [index, setIndex] = useState(0);

  function handleIndexSelection(selectedIndex){
    setIndex(selectedIndex);
  }

  return (
    <div className="App">
      <div className="App-body">
        <Panel handleIndexSelection={handleIndexSelection}/>
        <ModelViewer index={index} />
        {/* <Button variant="outlined">aaa</Button> */}
      </div>
    </div>
  );
}

export default App;
