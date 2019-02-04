import React from 'react'
import axios from 'axios'

const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (persons.filter(person => (person.name === newName)).length !== 0) {
            alert(`${newName} on jo luettelossa`)
        }
    
        else {
            setPersons(persons.concat(personObject))
            setNewName('')

            axios
                .post('http://localhost:3001/persons', personObject)
                .then(response => {
                    console.log(response)
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