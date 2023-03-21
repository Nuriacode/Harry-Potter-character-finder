import CharacterCard from "./CharacterCard";

const CharacterList = ({listCharacter}) =>{

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