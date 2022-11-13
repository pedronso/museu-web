import "./ModelSelection.css"
import {jsonMock} from "./data2"
import Category from "./Category";

function ModelSelection({handleModelSelection}){

    return(
        <div className='container'>
        {Object.keys(jsonMock).map((category, index) =>{
            return(
                <>              
                  <Category name={category} index={index} handleModelSelection={handleModelSelection} ></Category>
                </>
            )
        }
        )}
    </div>
    );
}

export default ModelSelection;