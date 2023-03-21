const FilterHouse = ({ setHouseSelect,house}) => {

    const handleChange = (ev) => {
        setHouseSelect(ev.target.value)
    }

  return (
    <>
      <label htmlFor="house">Seleciona una casa</label>
      <select name="house" id={house} onChange={handleChange}>
        <option value="gryffindor">Gryffindor</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
      </select>
    </>
  );
};

export default FilterHouse;
