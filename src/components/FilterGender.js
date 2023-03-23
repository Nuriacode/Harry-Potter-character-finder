const FilterGender = ({setGenderRadio, gender}) => {

    const handleChange =(ev) => {
        setGenderRadio(ev.target.value)
    }

  return (
    <div>
      <input id="Mujer" checked= {gender==="female"} name="gender" type="radio" value="female" onClick={handleChange}/>
      <label htmlFor="Mujer">Mujer</label>
       <input id="Hombre" checked= {gender==="male"} name="gender" type="radio" value="male" onClick={handleChange}/>
      <label htmlFor="Hombre">Hombre</label>
    </div>
  );
};

export default FilterGender;
