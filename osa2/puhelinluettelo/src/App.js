import React, { useState } from 'react'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Phonebook from './components/Phonebook'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-1346456' },
    { name: 'Arto Järvinen', number: '040-863456' },
    { name: 'Lea Kutvonen', number: '050-128456' },
    { name: 'Tuure Piitulainen', number: '050-666' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  

  

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <FilterForm newFilter={newFilter} setNewFilter={setNewFilter} />
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h2>Numerot</h2>
      <Phonebook persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App
