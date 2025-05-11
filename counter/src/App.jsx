import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]= useState(15)
  //let counter=7;
const addvalue=()=>{
  console.log("counter",counter)
  counter++
  setcounter(counter)
}
const subvalue=()=>{
  console.log("counter",counter)
  counter--
  setcounter(counter)
  
  //setcounter(counter
}

  return (
    <>
      <h1>Hello Vite + React!</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addvalue}>Increment</button>
      <button onClick={subvalue}>Decrement</button>
    </>
  )
}

export default App
