import PropTypes from "prop-types";
import "../styles/layout/FilterHouse.scss";

const FilterHouse = ({ setHouseSelect, house }) => {
  const handleChange = (ev) => {
    setHouseSelect(ev.target.value);
  };

  return (
    <div className="divhouse">
      <label className="divhouse__label" htmlFor="house">
        Seleciona una casa
      </label>
      <select name="house" id={house} onChange={handleChange}>
        <option value="gryffindor">Gryffindor</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
      </select>
    </div>
  );
};

FilterHouse.propTypes = {
  setHouseSelect: PropTypes.func.isRequired,
  house: PropTypes.string.isRequired,
};

export default FilterHouse;
