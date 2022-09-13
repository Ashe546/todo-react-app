import React, {useState, useRef, useEffect} from "react";
import todo from "./todo";
import TodoList from "./TodoList";


const LOCAL_STORAGE_KEY = 'todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef =useRef()

  useEffect(()=> {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if (storedTodo) setTodos(storedTodo)
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handelAddTodo(e) {
       const name = todoNameRef.current.value
       if (name === '') return
       setTodos(prevTodos => {
        return [...prevTodos, {id: 2, name: name, completed: false }]
       })
        todoNameRef.current.value = null
       
  }

  return (
    <>
        <TodoList  todos={todos}/>
      <input ref={todoNameRef} type = "text" />
      <button onClick={handelAddTodo}>Add TodoList</button>
      <button>clear complet TodoList</button>
      <div>{todos.length} left todo</div>
    </>
  );
}

export default App;

