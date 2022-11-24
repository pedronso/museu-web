import ModelSelection from './ModelSelection';
import './Panel.css'

function Panel({handleModelSelection}){

    return(
      <div className='panel'>
        <h1 className='title'>Selecione o artefato</h1>
        <ModelSelection handleModelSelection={handleModelSelection}/>
      </div>
    );
}

export default Panel;