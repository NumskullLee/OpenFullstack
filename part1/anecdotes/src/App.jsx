import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Button = ({e, text})=>{
  return(
    <>
      <button onClick={e}>{text}</button>
    </>
  )
}

const AnecdoteRender = ({text}) => {
  
  return(
    <div>
      <h2>{text}</h2>
    </div>
  )
  
}

const Seccion1=(props)=>{
  return(

  <div>
    <Title text="Anecdote of the day"/>
    <AnecdoteRender text={props.anecdo} visible={true}/>
    <Votes total={props.total}/>
    <Button e={props.random} text="next anecdote"/>
    <Button e={props.vote} text="vote"/>
    </div>
  )
  
}

const Seccion2=(props)=>{
  if(props.visible===true){
    return(
    <>
        <Title text="Anecdote with most votes"/>
        <AnecdoteRender text={props.text}/>
        <Votes total={props.total}/>
    </>
    )
  }else{
    return(<></>)
  }
}

const Votes =(props)=> <h3>has {props.total} votes</h3>;

const Title = (props)=> <h1>{props.text}</h1>

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
   
  const [selected, setSelected] = useState(0);
  const [points,setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0});
  const [maxValue,setMaxValue] = useState(0);
  const [visible, setVisible]=useState(false);

  const random =()=> {
    var x=Math.floor(Math.random() * (anecdotes.length));//here was like  var x=Math.floor(Math.random() * (anecdotes.length-1)) but i can't reach the last anecdote from the array
    setSelected(x);

  }

  const vote =()=>{
    console.log(visible)
    setVisible(true);
    const copy = {...points}
    copy[selected]+=1;
    setPoints(copy)
    if(copy[selected]>copy[maxValue]){
      
      setMaxValue(selected);
    }
    
  }


  
  return (
    <div>
      <Seccion1 anecdo={anecdotes[selected]} total={points[selected]} random={random} vote={vote}  />
      <Seccion2 total={points[maxValue]} text={anecdotes[maxValue]} visible={visible}/>
    </div>
  )
}


export default App
