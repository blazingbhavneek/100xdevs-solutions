import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'


function App() {
  const [todos, setTodos]=useState([]);

  fetch("http://127.0.0.1:3000/todos")
    .then(response => response.json())
    .then(data => setTodos(data.todos))

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo todos={todos}></Todo>
    </div>
  )
}

export default App
