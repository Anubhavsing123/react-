import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue=()=>{
    setCount( count + 1)
    setCount(count+1)
  }
  const sub=()=>{
    setCount( count - 1)

  }
  return (
    <>
      <button onClick={addValue}>
        INCREMENT 
      </button>
      <button onClick={sub}>
        Decement
      </button>

    </>
  )
}

export default App
