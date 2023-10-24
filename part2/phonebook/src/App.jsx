import { useState } from 'react'


const App = () => {
 
  const [persons, setPersons] = useState([
    {name:'Arto Hellas'}
  ]);
  const [newName, setNewName] = useState('');

  const inputEventName=(event)=>{
    setNewName(event.target.value)
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
        name:newName
    };
    setPersons(persons.concat(newObj));
    setNewName('');
    }
  }
  return (
    <>
      <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
          <div>
            name: <input onChange={inputEventName} value={newName}/>
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
      </form>
      </div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person=><li key={person.name}>{person.name}</li>)}
      </ul>
    </>
  )
}

export default App
