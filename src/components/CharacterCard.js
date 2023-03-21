const CharacterCard = ({eachCharacter}) =>{
    return (
        <li>
          <img src={eachCharacter.photo} alt=''/>  
          <h3>{eachCharacter.name}</h3>
          <p>{eachCharacter.species}</p>
          <p>{eachCharacter.house}</p>
        </li>
    )
}

export default CharacterCard;