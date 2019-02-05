import React, { useState, useEffect } from 'react'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Phonebook from './components/Phonebook'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ notification, setNotification ] = useState({ message: null })

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
    })
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)

  const notify = (message, type='success') => {
    setNotification({ message, type })
    setTimeout(() => setNotification({ message: null }), 10000)
  }

  const personsToShow = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const person = persons.find(p => p.name === newName)
    console.log(person)

    if (person) {
      if (window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        personService
          .update({
            ...person,
            number: newNumber
          })
          .then(updatedPerson => {
            setPersons(persons.map(p => p.name === newName ? updatedPerson : p))
            setNewName('')
            setNewNumber('')
            notify(`Henkilön ${newName} numero muutettu`)
          })
          .catch(() => {
            setPersons(persons.filter(p => p.name !== newName))
            notify(`Henkilön ${newName} oli jo poistettu`, 'error')
          })
      }
    }

    else {
      setPersons(persons.concat(personObject))
      setNewName('')

      personService
        .create({
          name: newName,
          number: newNumber
        })
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setNewName('')
          setNewNumber('')
          notify(`Lisättiin ${createdPerson.name}`)
        })
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    const ok = window.confirm(`Poistetaanko ${person.name}`)
    if (ok) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
      notify(`Poistettiin ${person.name}`)
    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Notification notification={notification} />
      <FilterForm newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <PersonForm 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numerot</h2>
      <Phonebook persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
