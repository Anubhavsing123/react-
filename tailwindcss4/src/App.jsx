import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='bg-red-500 text-black '>Hello</p>
      <Card  channel="chai aur code" myobj={{ key: 'value' }} />
    </>
  )
}

export default App
