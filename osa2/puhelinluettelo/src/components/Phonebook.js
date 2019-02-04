import React from 'react'
import personService from '../services/persons'

const Phonebook = ({ persons, setPersons, newFilter }) => {
    const personsToShow = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))

    const handleOnClick = (id, name) => {
        if (window.confirm(`Poistetaanko ${name}?`)) {
            personService
                .remove(id)
                .then(response => {
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }

    const rows = () => personsToShow.map(person =>
        <li key={person.name}>
            {person.name} {person.number}
            <button onClick={() => handleOnClick(person.id, person.name)}>
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