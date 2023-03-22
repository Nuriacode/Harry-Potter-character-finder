import {Link} from 'react-router-dom';

const CharacterCard = ({eachCharacter}) =>{
    return (
        <li>
          <Link to={`/character/${eachCharacter.id}`}>
          <img src={eachCharacter.photo} alt=''/>  
          <h3>{eachCharacter.name}</h3>
          <p>{eachCharacter.species}</p>
          <p>{eachCharacter.house}</p>
          </Link>
        </li>
    )
}

export default CharacterCard;