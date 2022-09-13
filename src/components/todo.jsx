import React from 'react'

export default function todo({text , todo, todos, setTodo}) {

//Delet todo
const deletHandler = () => {
    console.log('delete')
    setTodo(todo.filter((e) => e.id !== todos.id))
}

//Change todo status
const completHandler = () => {
setTodo(todo.map((e) => {
    if(e.id === todos.id){
        return {
            ...e, completed: !e.completed,
        };
    }
    return e;
}))
}

  return (
    <div>
        <li className = {`${todos.completed ? "completed": ''}`} >{text}</li>
        <button onClick={completHandler}>Y</button>
        <button onClick={deletHandler}>D</button>
    </div>
  )
}
