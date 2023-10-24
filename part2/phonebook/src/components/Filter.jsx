const Filter = ({inputEventFilter, filter}) =>{
    return(
        <>
            <div>
                filter shown with <input onChange={inputEventFilter} value={filter}/>
            </div>
        </>
    )
}

export default Filter