import FilterHouse from "./FilterHouse";
import FilterInput from "./FilterInput";

const Filters = ({setHouseSelect, house, setInputSearch, searchName}) =>{
    const handleSumbit = (ev) =>{
        ev.preventDefault();
    }
    return (
        <section>
            <form className='form' onSubmit={handleSumbit}>
                <FilterInput setInputSearch={setInputSearch}
                searchName={searchName}/>
                <FilterHouse setHouseSelect={setHouseSelect} 
                house={house}/>
            </form>
        </section>
        
    )
}

export default Filters;