import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Total = (props) => {
    return (
        <div>
            <p>yhteensä {props.good + props.neutral + props.bad}</p>
        </div>
    )
}

const Average = (props) => {
    return (
        <div>
            <p>keskiarvo {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
        </div>
    )
}

const GoodPortion = (props) => {
    return (
        <div>
            <p>positiivisia {100.0 * (props.good/(props.good + props.neutral + props.bad))}</p>
        </div>
    )
}

const Statistics = (props) => {
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

    return (
        <div>
            <h1>anna palautetta</h1>
            <button onClick={() => setGood(good + 1)}>
                hyvä
            </button>
            <button onClick={() => setNeutral(neutral + 1)}>
                neutraali
            </button>
            <button onClick={() => setBad(bad + 1)}>
                huono
            </button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'))
