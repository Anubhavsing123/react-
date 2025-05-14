import { useCallback, useState,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  const copypasswordtoclickboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999); // For mobile devices
    window.navigator.clipboard.writeText(password) 
  },[password])
  //useRef is used to store the password value
  const passwordRef=useRef(null)
  const passwordsgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number)str+="0123456789"
    if(char)str+="!@#$%^&*()_+"
    for(let i=1;i<=length;i++){
      let chr=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(chr)}
    setPassword(pass)
  },[length, number, char,setPassword])


  useEffect(() => {
    passwordsgenerator()
  },[length,number,char,passwordsgenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' className='outline-none w-full py-1 px-3 bg-white' placeholder='Password' value={password} ref={passwordRef} readonly />
          <button className='text-white bg-blue-600 px-4 py-1' onClick={copypasswordtoclickboard}>
            Copy
          </button>
        </div>
        <div className= 'flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} />
            <label className='text-white'>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={number } id='number-input' onChange={()=>setNumber((prev)=>!prev)} />
            <label htmlFor='number-input' className='text-white'> Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={char } id='char-input' onChange={()=>setChar((prev)=>!prev)} />
            <label htmlFor='char-input' className='text-white'> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
