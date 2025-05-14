import React,{useState} from 'react'
import UserContext from '../context/Usercontext'
import { useContext } from 'react'
import SignUp from './SingUP'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setUser}=useContext(UserContext)
const handlesubmit=(event)=>{
  event.preventDefault()
  setUser({username,password})

}
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
      className='border-2 border-black p-4 m-5' 
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }} 
      placeholder='Enter your name' 
      />{" "}
      <input type="password"
      className='border-2 border-black p-4 m-5' 
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}placeholder='Enter your password' />
      <button className='cursor-pointer  m-4 p-5 bg-green-400 ' onClick={handlesubmit}>submit</button>
      <p className='m-4 p-5'>Don't have an account? <a href="{SignUp}">Sign up</a></p>
    </div>
  )
}

export default Login