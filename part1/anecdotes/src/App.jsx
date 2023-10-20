import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',//0
    'Adding manpower to a late software project makes it later!',//1
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',//2
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',//3
    'Premature optimization is the root of all evil.',//4
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',//5
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',//6
    'The only way to go fast, is to go well.'//7
  ]
   
  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0})

  const random =()=> {
    var x=Math.floor(Math.random() * (anecdotes.length));//here was like  var x=Math.floor(Math.random() * (anecdotes.length-1)) but i can't reach the last anecdote from the array
    setSelected(x);
    console.log(points)
  }

  const vote =()=>{
    const copy = {...points}
    copy[selected]+=1;
    setPoints(copy)
  }
  
  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <button onClick={random}>next anecdote</button>
      <button onClick={vote}>vote</button>
      <h2>has {points[selected]} votes</h2>
    </div>
  )
}
export default App
