import React, { useState } from 'react'

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total
  const positive = (props.good * 100) / (total)

  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </>
  )

}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={ () => setGood(good + 1) }>good</button>
      <button onClick={ () => setNeutral(neutral + 1) }>neutral</button>
      <button onClick={ () => setBad(bad + 1) }>bad</button>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App;