import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
    </div>
  )
}

const Header = props =>
  <h1>{props.course.name}</h1>

const Total = props => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return <p>yhteensä {total} tehtävää</p>
}
  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => (
  <div>
    {props.course.parts.map(part => <Part key={part.id} part={part} />)}
  </div>
)

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 14,
        id: 3
      },      
      {
        name: 'Windows 95:n perusteet',
        exercises: 10,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)