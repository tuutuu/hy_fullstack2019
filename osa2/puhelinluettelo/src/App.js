import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-1346456' },
    { name: 'Arto Järvinen', number: '040-863456' },
    { name: 'Lea Kutvonen', number: '050-128456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

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
    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
      nimi: <input value={newName} onChange={handleNameChange} />
      numero: <input value={newNumber} onChange={handleNumberChange} />
      <div>
        <button type="submit">lisää</button>
      </div>
      </form>
      <h2>Numerot</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App
