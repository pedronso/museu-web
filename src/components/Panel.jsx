import ModelSelection from './ModelSelection';
import './Panel.css'

function Panel({handleModelSelection, dados, loading, error}){

    return(
      <div className='panel'>
        <h1 className='title'>Selecione o artefato</h1>
        {loading && <div>Carregando dados...</div>}
        {error && (
        <div>{`Ocorreu um problema ao carregar os dados do servidor - ${error}`}</div>
      )}
        <ModelSelection handleModelSelection={handleModelSelection} dados={dados}/>
      </div>
    );
}

export default Panel;