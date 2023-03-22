import '../styles/layout/FilterInput.scss'
const FilterInput = ({setInputSearch, searchName}) =>{

    const handleInput = (ev) =>{
        setInputSearch(ev.target.value)
    }

    return (
        <div className='div'>
        <label className='div__label' htmlFor="search">Busca por personaje</label>
        <input className='div__input' type='text' id="search" onInput={handleInput} value={searchName}
        placeholder="Escribe aquí"
        />
        </div>
       
    )
}

export default FilterInput;