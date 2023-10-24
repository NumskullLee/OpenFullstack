import { useState } from 'react'


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
    console.log(persons)
    }
  }




  return (
    <>
      <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={inputEventFilter} value={filter}/>
      </div>
      <h3>Add new</h3>
      <form onSubmit={addNewName}>
          <div>
            name: <input onChange={inputEventName} value={newName}/>
          </div>
          <div>
            number: <input onChange={inputEventPhone} value={newPhone}/>
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
      </form>
      </div>
      <h3>Numbers</h3>
      <ul>
        {persons.filter(person=> person.name.includes(filter) || person.number.includes(filter)).map(person=><li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </>
  )
}

export default App
