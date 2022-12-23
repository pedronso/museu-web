import "./ModelSelection.css"
import {jsonMock} from "./data"
import Category from "./Category";

function ModelSelection({handleModelSelection, /*dados*/}){

    return(
        <div className='model-selection-container'>
        {Object.keys(jsonMock).map((category, index) =>{
            return(
                <>              
                  <Category category={category} cat_index={index} handleModelSelection={handleModelSelection}></Category>
                </>
            )
        }
        )}
    </div>
    );
}

export default ModelSelection;