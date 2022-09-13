import { useEffect, useState } from "react";
import Form from "./components/form";
import TodoList from "./components/TodoList";
import './App.css'


function App() {
  //states
 const [inputText, setInputText] = useState("")
 const [todo, setTodo] = useState([])
 const [status, setStatus] = useState('all')
 const [filterTodos, setFilterTodos] = useState([])

 //EFFECTS
 
 useEffect( ()=>{
  filterTodosHandler();
},[todo, status])

// filter function
 const filterTodosHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todo.filter(todos => todos.completed === true));
        break;
        case 'uncompleted':
          setFilterTodos(todo.filter(todos => todos.completed === false));
          break;
        default:
        setFilterTodos(todo);
        break;
    } 
 }

  return (
    <div className="app">
       <h1>Todo List</h1>
       <Form 
       todo = {todo} 
       setTodo = {setTodo}
        setInputText= {setInputText}
         inputText = {inputText}
         setStatus = {setStatus}
         />
       <TodoList 
       inputText = {inputText}
       todo = {todo}
       setTodo = {setTodo}
       filterTodos = {filterTodos}/>
    </div>
  );
}

export default App;
