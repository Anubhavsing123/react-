import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-300 ' style={{ backgroundColor:color }}>
      <div className='fixed flex  flex-wrap justify-center bottom-12px inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
       <button onClick={() => setColor("red")} className='w-10 h-10 bg-red-500 rounded-full'></button>
       <button onClick={() => setColor("blue")} className='w-10 h-10 bg-blue-500 rounded-full'></button>
       <button onClick={() => setColor("green")} className='w-10 h-10 bg-green-500 rounded-full'></button>
       <button onClick={() => setColor("yellow")} className='w-10 h-10 bg-yellow-500 rounded-full'></button>
       <button onClick={() => setColor("purple")} className='w-10 h-10 bg-purple-500 rounded-full'></button>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
