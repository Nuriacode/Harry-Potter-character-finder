const FilterInput = ({setInputSearch, searchName}) =>{

    const handleInput = (ev) =>{
        setInputSearch(ev.target.value)
    }

    return (
        <>
        <label for="search">Busca por personaje</label>
        <input type='text' id="search" onInput={handleInput} value={searchName}
        placeholder="Escribe aquí"
        />
        </>
    )
}

export default FilterInput;