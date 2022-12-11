import "./ModelSelection.css"
import Category from "./Category";

function ModelSelection({handleModelSelection, dados}){

    return(
        <div className='model-selection-container'>
        {dados?.map((category, index) =>{
            return(
                <>              
                  <Category category={category} cat_index={index} handleModelSelection={handleModelSelection} dados={dados}></Category>
                </>
            )
        }
        )}
    </div>
    );
}

export default ModelSelection;