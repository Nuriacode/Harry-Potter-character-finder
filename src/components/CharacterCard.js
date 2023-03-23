import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../styles/layout/CharacterCard.scss';

const CharacterCard = ({eachCharacter}) =>{
    return (
        
          <Link className='linkCard'to={`/character/${eachCharacter.id}`}>
          <li className='cardCharacter' >
          <img className='cardCharacter__img' src={eachCharacter.photo} alt=''/>  

          <h3 className='cardCharacter__name'>{eachCharacter.name}</h3>
          <p>{eachCharacter.species}</p>
          </li>
          </Link>
        
    )
}


CharacterCard.propTypes = {
eachCharacter: PropTypes.func.isRequired
};

export default CharacterCard;