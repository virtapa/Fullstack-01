import React, { useState } from 'react'

const Header = () => {
  return (<h1>Give feedback</h1>)
}

const Stats = () => {
  return (<h1>Statistics</h1>)
}

const StatisticLine = ({value, text}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}  
  </button>
)
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good - bad) / all
  const positive = (good / all) * 100
  if (all > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine value={good} text="Good" />
          <StatisticLine value={neutral} text="Neutral" />
          <StatisticLine value={bad} text="Bad" />
          <StatisticLine value={all} text="Total reviews" />
          <StatisticLine value={avg.toFixed(2)} text="Average" />
          <StatisticLine value={positive.toFixed(2)+" %"} text="Positive" />
        </tbody>
      </table>
    )
  }
  else {
  return (
    <div>
      <p>No Feedback given</p>
    </div>
  )
}
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header/>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Stats />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App