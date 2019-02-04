import React from 'react'

const Phonebook = ({ persons, newFilter }) => {
    const personsToShow =
    persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))

    const rows = () => personsToShow.map(person =>
        <li key={person.name}>{person.name} {person.number}</li>
    )
    
    return (
        <ul>
            {rows()}
        </ul>
    )
}


export default Phonebook