import { useEffect, useState } from "react";
import { Route, Routes, matchPath, useLocation  } from "react-router-dom";
import getDataApi from "../services/api";
import "../styles/App.scss";
import CharacterDetail from "./CharacterDetail";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import logo from './imges/logo.webp';

function App() {
  const [listCharacter, setListCharacter] = useState([]);
  const [house, setHouse] = useState("gryffindor");
  const [searchName, setSearchName] = useState("");


  useEffect(() => {
    getDataApi(house).then((dataOk) => {
      setListCharacter(dataOk);
    });
  }, [house]);

  const setHouseSelect = (value) => {
    setHouse(value);
  };

  const setInputSearch = (value) => {
    setSearchName(value);
  };

  const characterFiltered = listCharacter.filter((eachCharacter) =>
    eachCharacter.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );



  const { pathname } = useLocation();

  const urlData = matchPath("/character/:id", pathname);
  console.log(urlData);

  const characterId = urlData !== null ? urlData.params.id : null;

  const findCharacter = characterFiltered.find((eachCharacter) => eachCharacter.id === characterId);
  console.log(findCharacter);

 

  return (
    <div>
      <header className="header">
        <img className="header__img" src={logo} alt='Logo harry potter'/>
        <h1 className="header__title">Personajes de Harry Potter</h1>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  house={house}
                  setHouseSelect={setHouseSelect}
                  setInputSearch={setInputSearch}
                  searchName={searchName}
                />

                <CharacterList className="characterList"
                searchName={searchName}listCharacter={characterFiltered} characterFiltered={characterFiltered}
                />
              </>
            }
          ></Route>
          <Route path="/character/:id" element={<CharacterDetail findCharacter={findCharacter}/>} />
        </Routes>
      </main>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
