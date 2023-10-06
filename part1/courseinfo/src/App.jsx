import { useState } from 'react'

const Header = (props) =>{
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}


const Content = (props) => {
  return(
    <>
       <Part part={props.courses[0].part.part1} exercises={props.courses[0].exercise.exercises1}/>
       <Part part={props.courses[1].part.part2} exercises={props.courses[1].exercise.exercises2}/>
       <Part part={props.courses[2].part.part3} exercises={props.courses[2].exercise.exercises3}/>
    </>
  )
}

const Part = (props) => {
  return(
    <>
       <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.res}</p>
    </>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courses = [
    {part: {part1}, exercise:{exercises1} },
    {part: {part2}, exercise:{exercises2}},
    {part: {part3}, exercise:{exercises3}}]

    
  return (
    <div>
      <Header course={course}/>
      <Content courses={courses}/>
      <Total res={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App