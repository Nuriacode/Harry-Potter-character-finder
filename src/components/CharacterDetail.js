import "../styles/layout/CharacterDetail.scss";

const CharacterDetail = ({ findCharacter }) => {
  return (
    <div className="divDetail">
      <article className="article">
        <div className="article__div">
          <img className="article__div--img" src={findCharacter.photo} alt="" />
          <div className="article__div--text">
            <h3>{findCharacter.name}</h3>
            <p>Especie: {findCharacter.species}</p>
            <p>Genero: {findCharacter.alive}</p>
            <p>Casa: {findCharacter.house}</p>
             <p>Estatus: {findCharacter.alive}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CharacterDetail;
