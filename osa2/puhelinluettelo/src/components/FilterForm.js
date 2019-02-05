import React from 'react'

const FilterForm = (props) => {
    return (
        <div>
            rajaa näytettäviä: <input onChange={props.handleFilterChange} value={props.newFilter}  />
        </div>
    )
}

export default FilterForm