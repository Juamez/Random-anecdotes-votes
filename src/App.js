import './App.css';
import { useState } from 'react' 

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
  
  const arr = new Array(7).fill(0)

  const [selected, setSelected] = useState(0)
  const [index, setIndex] = useState(0)
  const [storage, setStorage] = useState([...arr])

  
  const handleClickVote = (selected) => {
    const copy = [ ...storage ]
    copy[selected] += 1
    setStorage(copy)
    
    
    let result = Math.max.apply(null, copy)
    setIndex(copy.indexOf(result))
    console.log(copy)
  }

  const handleClick = () => {
    const randomNum =  Math.floor(Math.random() * (anecdotes.length - 1)) + 1
    setSelected(randomNum)
  }

  return (
    <div className="App">
      <p>{anecdotes[selected]}</p>
      <p>Has {storage[selected]} votes</p>
      <button onClick={() =>{handleClickVote(selected)}}>Vote</button>
      <button onClick={handleClick}>
        Next Anecdote
      </button>
      <h1>The Anecdote with the most votes</h1>
      <p>{anecdotes[index]}</p>
      <p>Has {storage[index]} votes</p>
    </div>
  )
}

export default App;
