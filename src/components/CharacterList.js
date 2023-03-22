import CharacterCard from "./CharacterCard";
import ErrorMessage from "./ErrorMessage";

const CharacterList = ({listCharacter, searchName}) =>{
    if(listCharacter.length === 0 && searchName !== ""){
        return <ErrorMessage/>
    }

    const dataHtml = listCharacter.map((eachCharacter) => {
        return (
            <CharacterCard eachCharacter={eachCharacter} key= {eachCharacter.id}/>  
        )
    }) 

    return (
        
           
        <ul>
          {dataHtml}
        </ul>
        
    )
}

export default CharacterList;