import { useState, useEffect } from 'react';
import {jsonMock} from "./data2"
import axios from "axios";
import "./ModelSelection.css"
import Category from './Category';

function Teste() {
    
    const [dados, setDados] = useState([{sentence:"aaa", character:{name:"bbb"}}, {sentence:"aaa2", character:{name:"bbb2"}}]);
    const [model, setModel] = useState('nada');

    function handleSetModel(selectedModel){
      setModel(selectedModel)
    }

    useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				"https://api.gameofthronesquotes.xyz/v1/random/10"
        );
        setDados(data);
		};

		fetchData();
	}, []);
  console.log(jsonMock)
  console.log("sentences", dados)
  return (
    <div className='container'>
        {Object.keys(jsonMock).map((teste, index) =>{
            return(
                <>              
                {/* Duas abordagens possíveis:
                    1- State com array (estudar como é feito nos exemplos)--lascou
                    2- Componentes filhos, com states próprios

                */}
                  <Category name={teste} index={index} handleSetModel={handleSetModel} ></Category>
                </>
            )
        }
        )}
    <div>{model}</div>
    </div>
  );
}

export default Teste;
