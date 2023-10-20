import Part from "./Part"

const Contetn = (props)=>{
  return(
    <>
      {props.parts.map(part=> <Part part={part} key={part.id}/> )}
    </>
  )
}

export default Contetn