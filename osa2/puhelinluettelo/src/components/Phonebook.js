import React from 'react'

const Phonebook = (props) => {
    const rows = () => props.persons.map(person =>
        <li key={person.name}>
            {person.name} {person.number}
            <button onClick={() => props.deletePerson(person.id, person.name)}>
                poista
            </button>
        </li>
    )
    
    return (
        <ul>
            {rows()}
        </ul>
    )
}

export default Phonebook