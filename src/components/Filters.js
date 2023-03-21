import FilterHouse from "./FilterHouse";
import FilterInput from "./FilterInput";

const Filters = ({setHouseSelect, house, setInputSearch, searchName}) =>{
    return (
        <section>
            <form>
                <FilterInput setInputSearch={setInputSearch}
                searchName={searchName}/>
                <FilterHouse setHouseSelect={setHouseSelect} 
                house={house}/>
            </form>
        </section>
        
    )
}

export default Filters;