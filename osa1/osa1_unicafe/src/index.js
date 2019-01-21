import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Total = (props) => {
    const stat = props.good + props.neutral + props.bad

    return (
        <div>
            <Statistic text='yhteensä' stat={stat} />
        </div>
    )
}

const Average = (props) => {
    const stat = (props.good - props.bad) / (props.good + props.neutral + props.bad)

    return (
        <div>
            <Statistic text='keskiarvo' stat={stat} />
        </div>
    )
}

const GoodPortion = (props) => {
    const stat = props.good / (props.good + props.neutral + props.bad)

    return (
        <div>
            <Statistic text='positiivisia' stat={stat} />
        </div>
    )
}

const Statistic = ({ text , stat }) => {
    return (
        <div>
            <p>{text} {stat}</p>
        </div>
    )
}

const Statistics = (props) => {

    if (props.good + props.neutral + props.bad === 0)
        return ( 
            <div>
                <h1>statistiikka</h1>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        ) 

    return (
        <div>
            <h1>statistiikka</h1>
            <p>hyvä {props.good}</p>
            <p>neutraali {props.neutral}</p>
            <p>huono {props.bad}</p>
            <Total good={props.good} neutral={props.neutral} bad={props.bad} />
            <Average good={props.good} neutral={props.neutral} bad={props.bad} />
            <GoodPortion good={props.good} neutral={props.neutral} bad={props.bad} />
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>anna palautetta</h1>
            <Button handleClick={handleGoodClick} text='hyvä' />
            <Button handleClick={handleNeutralClick} text='neutraali' />
            <Button handleClick={handleBadClick} text='huono' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'))
