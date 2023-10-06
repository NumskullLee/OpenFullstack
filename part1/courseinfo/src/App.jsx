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
       <Part part={props.courses[0].name} exercises={props.courses[0].exercises}/>
       <Part part={props.courses[1].name} exercises={props.courses[1].exercises}/>
       <Part part={props.courses[2].name} exercises={props.courses[2].exercises}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const courses = [part1,part2,part3]

    
  return (
    <div>
      <Header course={course}/>
      <Content courses={courses}/>
      <Total res={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App