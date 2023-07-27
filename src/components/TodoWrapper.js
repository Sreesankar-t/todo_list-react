import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './todoForm';
import Tools from './Tools';
import EditTodoForm from './EditTodoFrom'; // Corrected the filename from 'EditTodoFrom' to 'EditTodoForm'

uuidv4();

function TodoWrapper() { 

  const [todos, setTodos] = useState([])
  const [error,setError] =useState("")
  const addTodo = (todo) => {
    const trimmedTodo = todo.trim();
    if (!isDuplicateTask(trimmedTodo) && trimmedTodo !== '') {
      setTodos([
        ...todos,
        { id: uuidv4(), task: trimmedTodo, completed: false, isEditing: false },
      ]);
    } else {
      setError("Invalid task submission. Empty or duplicate task is not allowed!");
      setTimeout(() => {
        setError("")
      },5000);
    }
  };
  
  
 

  const toggleComplete=id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed} :todo))
  }

  const deleteTodo= id =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo= id =>{
    setTodos(todos.map(todo => todo.id === id ?{...todo, isEditing: !todo.isEditing}:todo)
    )
  }

  const editTask = (task,id) =>{
    setTodos(todos.map(todo => todo.id === id ?{...todo, task, isEditing: !todo.isEditing}:todo))
  }

  const isDuplicateTask = (task) => {
    const trimmedTask = task.trim();
    return todos.some((todo) => todo.task.trim() === trimmedTask);
  };
  
  
  return (
    <div className="TodoWrapper">
     
      <h1>Task Master: Get Things Done!</h1>
      <p style={{color:'red',fontWeight:'bold',fontSize:'small'}}>{error}</p>
      <TodoForm addTodo={addTodo} />
    <br />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm key={index} editTodo={editTask} task={todo}/>
          
        ) :(
        <Tools task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
        
      ))}
       
    </div>
  );
}

export default TodoWrapper;



