import React from 'react'

const FilterForm = ( {newFilter, setNewFilter} ) => {
    
    
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }

    return (
        <div>
            rajaa näytettäviä: <input value={newFilter} onChange={handleFilterChange} />
        </div>
    )
}

export default FilterForm