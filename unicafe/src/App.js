import React, { useState } from 'react'

const Statistics = (props) => {
  return (
    <p>
    {props.text} {props.value}
    </p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good -bad) / total
  const positive = (good * 100) / (total)
  
  

  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={ () => setGood(good + 1) }>good</button>
      <button onClick={ () => setNeutral(neutral + 1) }>neutral</button>
      <button onClick={ () => setBad(bad + 1) }>bad</button>

      <h1>Statistics</h1>
      <Statistics text={'good'} value={good} />
      <Statistics text={'neutral'} value={neutral} />
      <Statistics text={'bad'} value={bad} />
      <Statistics text={'all'} value={total} />
      <Statistics text={'average'} value={average} />
      <Statistics text={'positive'} value={positive} />

    </div>
  )
}

export default App;