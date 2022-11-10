import ModelSelection from './ModelSelection';
import './Panel.css'

function Panel({handleIndexSelection}){

    function handleModelSelection(selectedModel){
      console.log(selectedModel)
      handleIndexSelection(selectedModel);
    }
    return(
      <div className='panel'>
        <h1>Selecione o artefato</h1>
        <ModelSelection handleModelSelection={handleModelSelection}/>
      </div>
    );
}

export default Panel;