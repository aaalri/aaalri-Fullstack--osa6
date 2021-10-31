import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clickVote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleVote}) => {
  return(
    <div key={anecdote.id}>
        <div>
            {anecdote.content}
        </div>
        <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
        </div>
    </div>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()  
  const anecdotes = useSelector(state => 
    state.anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    .sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
  )

  const handleVote = async (anecdote) => {
    dispatch(clickVote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`,10))
  }

  return(
    <div>
        {anecdotes.map(anecdote =>
         <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleVote={() => handleVote(anecdote)}
        />
        )}
    </div>
  )
}

export default Anecdotes