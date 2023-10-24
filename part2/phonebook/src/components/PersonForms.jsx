const PersonasForms = ({evtSubmit, evtName, vname, evtnumber, vnumber}) => {
    return(
    <>
        <form onSubmit={evtSubmit}>
          <div>
            name: <input onChange={evtName} value={vname}/>
          </div>
          <div>
            number: <input onChange={evtnumber} value={vnumber}/>
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
        </form>
    </>
    )
}

export default PersonasForms;