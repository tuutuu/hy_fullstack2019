import React from 'react'

const Course = (props) => {
    return (
      <div>
        <Header course={props.course} />
        <Content course={props.course} />
        <Total parts={props.course.parts} />
      </div>
    )
  }
  
  const Header = props =>
    <h1>{props.course.name}</h1>
  
  const Total = props => {
    let initialValue = 0
    let total = props.parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises
      ,initialValue
    )
  
    return <p>yhteensä {total} tehtävää</p>
  }
    
  
  const Part = props =>
    <p>{props.part.name} {props.part.exercises}</p>
  
  const Content = props => (
    <div>
      {props.course.parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )

  export default Course