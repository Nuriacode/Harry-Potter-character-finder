import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';


function App() {

  const [listCharacter, setListCharacter] = useState([])
  const [house, setHouse]=useState("gryffindor")
  const [searchName, setSearchName] = useState("")

  useEffect(() => {
    getDataApi(house).then((dataOk) =>{
      setListCharacter(dataOk)
    });
  }, [house]);

  const setHouseSelect = (value) => {
    setHouse(value)
  }

  const setInputSearch = (value) =>{
    setSearchName(value)
  }

  const characterFiltered = () => {
    return (listCharacter
      .filter((eachCharacter) => eachCharacter.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()))
      
    )
  }
  
  return <div>
    <header>
      <h1>Personajes de Harry Potter</h1>
    </header>
    <main>
      <Filters 
      house={house} 
      setHouseSelect={setHouseSelect}
      setInputSearch={setInputSearch}
      searchName={searchName}/>

      <CharacterList 
      listCharacter={characterFiltered()}/>
    </main>
  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
