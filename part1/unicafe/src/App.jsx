import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Button = (props) =>{
  return(<><button onClick={props.handle}>{props.text}</button></>)
}


const App=()=> {
  
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)


  const goodClick=()=>{
    const counter=good+1;
    setGood(counter);
  }
  const neutralClick=()=>{
    const counter=neutral+1;
    setNeutral(counter);
  }
  const badClick=()=>{
    const counter=bad+1;
    setBad(counter);
  }

  return (
    <>
      <div>
        <h1>Give feedback</h1> 
        <Button handle={goodClick} text="good"/>
        <Button handle={neutralClick} text="netrual"/>
        <Button handle={badClick} text="bad"/>
        <h1>Statistics</h1>
        <p>{good}</p>
        <p>{neutral}</p>
        <p>{bad}</p>
         
       </div>
    </>
  )
}

export default App
