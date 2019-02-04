import React from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        const person = persons.find(p => p.name === newName)
        console.log(person)

        if (person.name === newName) {
            if (window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
                personService
                    .update(person.id, personObject)
                    .then(response => {
                        setPersons(persons.map(person => person.name !== newName ? person : personObject))
                    })
            }
        }
    
        else {
            setPersons(persons.concat(personObject))
            setNewName('')

            personService
                .getAll()
                .then(initialPersons => {
                    setPersons(initialPersons)
                })
        }  
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                nimi: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                numero: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </form>
    )
}

export default PersonForm