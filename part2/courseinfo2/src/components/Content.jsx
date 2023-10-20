import Part from "./Part"



const Contetn = (props)=>{
  const array=props.parts.map(data=>data.exercises);  
  const total = array.reduce((s, p) => s + p);

  return(
    <>
      {props.parts.map(part=> <Part part={part} key={part.id}/> )}
      <p>Total of {total} exercises </p>
    </>
  )
}

export default Contetn