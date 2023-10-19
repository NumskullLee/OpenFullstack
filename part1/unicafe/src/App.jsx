import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Button = (props) =>{
  return(<><button onClick={props.handle}>{props.text}</button></>)
}

const Statistics = ({good, neutral, bad, total, average, positive}) =>{
  if(good === 0 && neutral === 0 && bad === 0){
    return(
      <>
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
      </>
    )
  }else{
    return(<>
    <div>
        <h1>Statistics</h1>
          <p>{good}</p>
          <p>{neutral}</p>
          <p>{bad}</p>
          <p>{total}</p>
          <p>{average}</p>
          <p>{positive} %</p>
    </div>
    </>)
  }
}


const App=()=> {
  
  const [good,setGood]=useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0);
  const [total,setTotal]=useState(0);
  const [average,setAverage]=useState(0);
  const [positive,setPositive]=useState(0);


  const goodClick=()=>{
    const counter=good+1;
    const total=counter+neutral+bad;
    setGood(counter);
    setTotal(total);
    setAverage((counter-bad)/total);
    setPositive((counter/total)*100)
  }
  const neutralClick=()=>{
    const counter=neutral+1;
    const total=good+counter+bad;
    setNeutral(counter);
    setTotal(total);
    setPositive((good/total)*100)
  }
  const badClick=()=>{
    const counter=bad+1;
    const total=good+neutral+counter;
    setBad(counter);
    setTotal(total);
    setAverage((good-counter)/total)
    setPositive((good/total)*100)
  }

  return (
    <>
      <div>
        <h1>Give feedback</h1> 
        <Button handle={goodClick} text="good"/>
        <Button handle={neutralClick} text="netrual"/>
        <Button handle={badClick} text="bad"/>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
         
       </div>
    </>
  )
}

export default App
