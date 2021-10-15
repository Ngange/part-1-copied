import React, { useState } from 'react'

const Anecdotes = ({head, anecdote}) => {
  return (
    <>
      <h2>{head}</h2>
      <p>
        {anecdote}
      </p>
    </>
  )
}

const MostVotedAnecdote = ({head, anecdote, vote}) => {
  
    if(vote === 0) {
      return <p></p>;
    }
    return(
      <>
      <Anecdotes head={head} anecdote={anecdote} />
      <Votes vote={vote} />
      </>
    )
    /* <>
      <h2>{head}</h2>
      <p>
        {anecdote}
      </p>
    </> */
}

const Votes = ({vote}) => {
  if(vote === 1) {
    return <p>has {vote} vote</p>
  }
  return(
    <p>
      has {vote} votes
    </p>
  )
}

const Button = ({onClick, text}) => {
  return (
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  let votesArray = new Array(anecdotes.length).fill(0)
  const [voteClick, setVoteClick] = useState(votesArray)
  const [mostvotes, setMostVotes] = useState(0);

  const random = () => {
    
    setSelected(Math.floor(Math.random() * anecdotes.length))
    
    
  }

  const increaseVote = () => {
    
    setMostVotes(voteClick.indexOf(Math.max(Math.max(...voteClick))))
    console.log(mostvotes)
    let copy = [...voteClick];
    copy[selected]+= 1;
    setVoteClick(copy);
    console.log(copy)
    
  };
  
  return (
    <div>
      <Anecdotes anecdote={anecdotes[selected]} head={"Anecdote of the day"} />
      <Votes vote={voteClick[selected]} />
      <Button onClick={increaseVote} text="vote" />
      <Button onClick={random} text="next anecdote" />
      
      <MostVotedAnecdote head="Anecdote with most votes" 
        anecdote={anecdotes[mostvotes]}
        vote={voteClick[mostvotes]} 
      />
      
    </div>
  )
}

export default App