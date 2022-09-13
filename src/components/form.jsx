import React from 'react'

export default function form({setInputText, todo, setTodo, inputText,  setStatus}) {

    //InputText handler
   const inputTextHandler = (e) => {
    setInputText(e.target.value)
   }

   // submits a Todo
   const submitTodoHandler = (e) => {
    e.preventDefault()
    if(inputText !== ""){
    return (
        setTodo([...todo , {text: inputText, completed: false , id: Math.random() * 100000}])
         
    )
    
    }
    return 
   
    setInputText("")  
   }

   //gets the stutus of todos
   const statusHandler = (e) => {
    setStatus(e.target.value)
   }

   // clear all todos
   const clearAllHandler = (e) =>{
    setTodo(todo.filter(todos => todos.completed === false))
    e.preventDefault()   
    }

  return (
    <div>
        <form>
        <input value = {inputText} onChange={inputTextHandler} type= "text"></input>
      <button onClick={submitTodoHandler} type='submit'>Y</button>
      <select onChange={statusHandler} name="todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <button onClick={clearAllHandler}>Clear All</button>
        </form>

    </div>
  )
}
