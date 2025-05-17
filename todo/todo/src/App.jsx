import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import './App.css'
import { TodoItem } from './components/TodoItem.jsx'
import TodoForm from './components/TodoForm.jsx'

function App() {
const [todo,setTodo]=useState([])
const addTodo=(todo)=>{
  setTodo((prev)=>([{id:Date.now(),...todo},...prev]))
}
const updateTodo = (id, todo) => {
  setTodo((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, ...todo } : item
    )
  );
};

const deleteTodo = (id) => {
  setTodo((prev) => prev.filter((item) => item.id !== id));
};

const toggle = (id) => {
  setTodo((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
  );
};
useEffect(()=>{
 const local=JSON.parse(localStorage.getItem('todo'))
  if(local && local.length>0){
    setTodo(local)
  }
},[])
useEffect(()=>{
 localStorage. setItem('todo',JSON.stringify(todo))
},[todo])
  return (
    <TodoProvider value={{ todo, addTodo, updateTodo, deleteTodo, toggle }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        { <TodoForm /> }
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todo.map((item)=>(
                          <div key={item.id} className="w-full">
                            <TodoItem todo={item} />
                          </div>
                        ))} 
                          </div>
                    </div>
                </div>
                </TodoProvider>
            
    
  )
}

export default App
