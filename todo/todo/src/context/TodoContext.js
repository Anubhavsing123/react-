import { createContext,useContext } from "react";
import { useState } from "react";
export const TodoContext = createContext({
  todo:[
    {
      id:1,
      title:"todo 1",
      completed:false
    },
    {
      id:2,
      title:"todo 2",
      completed:true
    },
  ],
  addTodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggle:(id)=>{}
});
export const useTodoContext = () => {
    return useContext(TodoContext);
}
export const TodoProvider=TodoContext.Provider;