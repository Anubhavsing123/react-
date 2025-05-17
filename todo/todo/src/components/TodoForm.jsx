import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext.js'

function TodoForm() {
  const [todo,setTodo]=useState('')
  const {addTodo}=useTodoContext()
  const add=(e)=>{
    e.preventDefault()
    if(!todo) return
    addTodo({ text: todo, completed: false }) // <-- changed here
    setTodo('')
  }

  return (
    <form onSubmit={add} className='flex'>
      <input type="text" className='bg-[#172842] border-none outline-none w-full px-4 py-2 rounded-md' placeholder='Add a new todo'
       value={todo} 
       onChange={(e)=>setTodo(e.target.value)}
        />
      <button className='bg-[#3b82f6] text-white px-4 py-2 rounded-md ml-2' type='submit'>Add</button>

    </form>
  )
}

export default TodoForm;