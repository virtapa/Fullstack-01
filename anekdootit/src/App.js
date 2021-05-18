
import React, { useState } from 'react'



const App = (props) => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


  const randomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
}
  
const mostVotes = () =>  (votes.indexOf(Math.max(...votes)));

   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={randomAnecdote}>Next Anecdote</button>
      <h1>Most voted anecdote</h1>
      <p>{anecdotes[mostVotes()]}</p>
      <p>has {votes[mostVotes()]} votes</p>

    </div>
  )
}

export default App