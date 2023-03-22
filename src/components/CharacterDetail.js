const CharacterDetail = ({findCharacter}) =>{


    return (
        <>
        <h2>Detalle del personaje</h2>
        <article>
           <img src={findCharacter.photo} alt=''/>  
          <h3>{findCharacter.name}</h3>
          <p>{findCharacter.species}</p>
          <p>{findCharacter.house}</p>
        </article>
        </>
        
    )
}

export default CharacterDetail;