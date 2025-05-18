import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/Todoslice.js"
export  const store=configureStore({
  reducer:todoReducer
})