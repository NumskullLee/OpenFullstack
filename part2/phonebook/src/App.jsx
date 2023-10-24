import { useState } from 'react'
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonasForms from './components/PersonForms';

const App = () => {
 
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setNewFilter] = useState('');

  const inputEventName=(event)=>{
    setNewName(event.target.value);
  }

  const inputEventPhone=(event)=>{
    setNewPhone(event.target.value);
  }
  const inputEventFilter=(event)=>{
    setNewFilter(event.target.value); 
  }
 
  const addNewName=(event)=>{
    event.preventDefault();
    
    const band=persons.some(person=> {
      return person.name == newName;
    });
    
    if(band){
      alert(newName+' is already add to phonebook')
    }else{
    const newObj = {
        name:newName,
        number:newPhone,
        id: persons.length+1
    };
    setPersons(persons.concat(newObj));
    setNewName('');
    setNewPhone('');

    }
  }

  return (
    <>
      <div>
      <h2>Phonebook</h2>
      <Filter inputEventFilter={inputEventFilter} filter={filter}/>
      <h3>Add new</h3>
      <PersonasForms evtSubmit={addNewName} evtName={inputEventName} vname={newName} evtnumber={inputEventPhone} vnumber={newPhone}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter}/>
      </div>
      
    </>
  )
}

export default App
