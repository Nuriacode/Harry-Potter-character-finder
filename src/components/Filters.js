import PropTypes from "prop-types";
import FilterHouse from "./FilterHouse";
import FilterInput from "./FilterInput";

const Filters = ({ setHouseSelect, house, setInputSearch, searchName }) => {
  const handleSumbit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={handleSumbit}>
        <FilterInput setInputSearch={setInputSearch} searchName={searchName} />
        <FilterHouse setHouseSelect={setHouseSelect} house={house} />
      </form>
    </section>
  );
};

Filters.propTypes = {
  setHouseSelect: PropTypes.func.isRequired,
  house: PropTypes.string.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
};

export default Filters;
