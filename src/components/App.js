import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';


function App() {

  const [listCharacter, setListCharacter] = useState([])

  useEffect(() => {
    getDataApi().then((dataOk) =>{
      setListCharacter(dataOk)
    });
  }, []);
  
  return <div>
    <header>
      <h1>Personajes de Harry Potter</h1>
    </header>
    <main>
      <CharacterList listCharacter={listCharacter}/>
    </main>




  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
