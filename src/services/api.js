import avatar from '../components/imges/avatar.jpeg';

const getDataApi = (house) =>{
    return (
        fetch (`https://hp-api.onrender.com/api/characters/house/${house}`)
        .then ((response)=> response.json())
        .then ((data) => {
            console.log(data)
            const dataOk = data.map((eachCharacter) =>{
                return {
                    id: eachCharacter.id,
                    name: eachCharacter.name,
                    species: eachCharacter.species,
                    gender: eachCharacter.gender,
                    yearOfBirth: eachCharacter.yearOfBirth,
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