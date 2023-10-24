const Persons= ({persons, filter})=>{
    
    return(
        <>
    <ul>
        {persons.filter(person=> person.name.includes(filter) || person.number.includes(filter)).map(person => <li key={person.id}>{person.name} {person.number}</li>)}
    </ul>
    </>
    )
}

export default Persons