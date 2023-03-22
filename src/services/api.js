import avatar from '../components/imges/avatar.jpeg';

const getDataApi = (house) =>{
    return (
        fetch (`https://hp-api.onrender.com/api/characters/house/${house}`)
        .then ((response)=> response.json())
        .then ((data) => {
            const dataOk = data.map((eachCharacter) =>{
                return {
                    id: eachCharacter.id,
                    name: eachCharacter.name,
                    species: eachCharacter.species,
                    house: eachCharacter.house,
                    alive: eachCharacter.alive,
                    photo: eachCharacter.image || avatar
                };
            });
            return dataOk
        })
    )
}

export default getDataApi;