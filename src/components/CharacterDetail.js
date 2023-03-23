import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import "../styles/layout/CharacterDetail.scss";
import gryffindor from './imges/gryffindor.png';
import ravenclaw from './imges/ravenclaw.png';
import slytherin from './imges/slytherin.png';
import hufflepuff from './imges/hufflepuff.png';


const CharacterDetail = ({ findCharacter }) => {

  const imageHouse = () =>{
    if (findCharacter.house === 'Gryffindor'){
      return (<img className="article__div--text--logo" src={gryffindor} alt='logo gryffindor'/>)
    } else if (findCharacter.house === 'Ravenclaw'){
      return (<img className="article__div--text--logo" src={ravenclaw} alt='logo ravenclaw'/>)
    } else if (findCharacter.house === 'Slytherin'){
      return (<img className="article__div--text--logo" src={slytherin} alt='logo slytherin'/>)
  } else if (findCharacter.house === 'Hufflepuff'){
      return (<img className="article__div--text--logo" alt='logo hufflepuff'src={hufflepuff}/>)
}}

  const alive = () => {
    if (findCharacter.alive === false) {
      return (<p>Estatus: Muerto <i class="fa-solid fa-skull-crossbones"></i></p> )
    } else if (findCharacter.alive === true) {
      return (<p>Estatus: Vivo <i class="fa-solid fa-heart-pulse"></i></p> )
    } 
  }

  if (findCharacter !== undefined){

  

  return (
    
    <section className="divDetail">
      <article className="article">
        <div className="article__div">
        <Link class="fa-solid fa-circle-arrow-left" to='/'>
      </Link>
          <img className="article__div--img" src={findCharacter.photo} alt="" />
          <div className="article__div--text">
            {imageHouse()}
            <h3>{findCharacter.name}</h3>
            <p>Especie: {findCharacter.species}</p>
            <p>Genero: {findCharacter.gender === "male" ? "Hombre" : "Mujer"}</p>
            <p>Casa: {findCharacter.house}</p>
            {alive()}
          </div>
        </div>
      </article>
    </section>
  
  );
} else {
  return <p>No encontrado</p>
}}

CharacterDetail.propTypes = {
 findCharacter: PropTypes.func.isRequired
};

export default CharacterDetail;
