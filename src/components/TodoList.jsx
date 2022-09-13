import React from 'react'
import Todo from './todo'

export default function TodoList({inputText, todo, setTodo, filterTodos}) {
  return (
    <ul>
      {filterTodos.map((todos) =>  <Todo 
      key = {todos.id} 
      text= {todos.text} 
      setTodo = {setTodo} 
      todo={todo} 
      todos ={todos}/>)}
    </ul>
   
  )
}
