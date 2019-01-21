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
        <Statistic text='yhteensä' stat={stat} />
    )
}

const Average = (props) => {
    const stat = (props.good - props.bad) / (props.good + props.neutral + props.bad)

    return (
        <Statistic text='keskiarvo' stat={stat} />
    )
}

const GoodPortion = (props) => {
    const stat = props.good / (props.good + props.neutral + props.bad)

    return (        
        <Statistic text='positiivisia' stat={stat} />
    )
}

const Statistic = ({ text , stat }) => {
    return (
        <td>{text} {stat}</td>
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
            <table>
                <tbody>      
                    <tr>
                        <td>hyvä</td>
                        <td>{props.good}</td>       
                    </tr>
                    <tr>
                        <td>neutraali</td>
                        <td>{props.neutral}</td>       
                    </tr>
                    <tr>
                        <td>huono</td>
                        <td>{props.bad}</td>       
                    </tr>
                    <tr>
                        <td>yhteensä</td>
                        <Total good={props.good} neutral={props.neutral} bad={props.bad} />  
                    </tr>
                    <tr>
                        <td>keskiarvo</td>
                        <Average good={props.good} neutral={props.neutral} bad={props.bad} />    
                    </tr>
                    <tr>
                        <td>keskiarvo</td>
                        <GoodPortion good={props.good} neutral={props.neutral} bad={props.bad} />      
                    </tr>
                </tbody>  
            </table>
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